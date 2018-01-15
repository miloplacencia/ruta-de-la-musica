/* eslint-disable import/no-extraneous-dependencies, no-console */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const http = require('http');
const app = require('express')();
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const sanitize = nombre =>
  nombre
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

app.get('/', async (req, res) => {
  const baseURL = path.resolve(__dirname, '../', 'public');
  const srcURL = path.resolve(__dirname, '../', 'src');
  const logosURL = path.resolve(`${__dirname}/logos`);
  const logoEndURL = `${srcURL}/logos`;

  const jsonURL = `${srcURL}/data-bruta.json`;
  const dataFile = `${baseURL}/data.json`;

  const logostmp = await readdir(logosURL);
  const jsontmp = await readFile(jsonURL, 'utf8').then(JSON.parse);

  const json = jsontmp.map(js => ({ ...js, n: sanitize(js.nombre) }));

  const logos = logostmp.map((logo) => {
    const [nombretmp] = logo.split('.');
    const nombre = sanitize(nombretmp).replace();
    const empresa = json.find(js => js.n.includes(nombre));

    const regexSpaces = /\s/gi;
    const nombrefile = nombre.replace(regexSpaces, '-', 'ig');

    if (empresa && empresa.nombre) {
      sharp(`${logosURL}/${logo}`)
        .resize(200, 200)
        .jpeg({ quality: 85 })
        // eslint-disable-next-line
        .toFile(`${logoEndURL}/${nombrefile}.jpeg`);
    }

    return { ...empresa, n: nombre, img: `/public/logos/${nombrefile}.jpeg` };
  });

  await Promise.all(logos);

  await writeFile(dataFile, JSON.stringify(logos), 'utf8');

  // eslint-disable-next-line
  return res.json(
    json.map(js =>
      ((logos.find(l => l.nombre === js.nombre) || {}).img
        ? null
        : { status: 'SIN_IMAGEN', nombre: js.nombre })));
});

const server = http.createServer(app);
server.listen({ port: 3001, host: '127.0.0.1' }, () => {
  console.log('SERVER STARTED');
});
