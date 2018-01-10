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
  const logosURL = path.resolve(`${__dirname}/logos`);
  const logoEndURL = `${baseURL}/logos`;
  const jsonURL = `${baseURL}/rutamusica.json`;
  const sateliteURL = `${baseURL}/direcciones.json`;
  const dataFile = `${baseURL}/data.json`;

  const logostmp = await readdir(logosURL);
  const jsontmp = await readFile(jsonURL, 'utf8').then(JSON.parse);
  const satelitetmp = await readFile(sateliteURL, 'utf8').then(JSON.parse);

  const json = jsontmp.map(js => ({ ...js, nombre: sanitize(js.Nombre) }));

  const logos = logostmp.map((logo) => {
    const [nombretmp, ext] = logo.split('.');
    const nombre = sanitize(nombretmp);
    const empresa = json.find(js => js.nombre.includes(nombre));

    if (empresa && empresa.Nombre) {
      sharp(`${logosURL}/${nombretmp}.${ext}`)
        .resize(200, 200)
        .jpeg()
        .toFile(`${logoEndURL}/${nombre.replace(' ', '-')}.jpeg`);
    }

    return { ...empresa, nombre, img: `/public/logos/${nombre.replace(' ', '-')}.jpeg` };
  });
  await Promise.all(logos);

  const satelite = satelitetmp
    .filter(sat => logos.find(l => l.Nombre === sat.Nombre))
    .map(sat => ({ ...logos.find(l => l.Nombre === sat.Nombre), ...sat }));

  await writeFile(dataFile, JSON.stringify(satelite), 'utf8');

  // eslint-disable-next-line
  return res.json(satelite);
});

const server = http.createServer(app);
server.listen({ port: 3001, host: '127.0.0.1' }, () => {
  console.log('SERVER STARTED');
});
