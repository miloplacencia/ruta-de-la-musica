/* eslint-disable import/no-extraneous-dependencies, no-console */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const http = require('http');
const app = require('express')();
const { promisify } = require('util');
const Promise = require('bluebird');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const sanitize = nombre =>
  nombre
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace("'", '');

const baseURL = path.resolve(__dirname, '../', 'public');
const srcURL = path.resolve(__dirname, '../', 'src');
const logosURL = path.resolve(`${__dirname}/logos`);

app.get('/img', async (req, res) => {
  const logoEndURL = `${srcURL}/logos`;

  const jsonURL = `${srcURL}/data-bruta.json`;
  const dataFile = `${baseURL}/data.json`;

  const logostmp = await readdir(logosURL);
  const jsontmp = await readFile(jsonURL, 'utf8').then(JSON.parse);

  const json = jsontmp.map(js => ({ ...js, n: sanitize(js.nombre) }));

  const logos = await Promise.all(logostmp.map((logo) => {
    const [nombretmp] = logo.split('.');

    const nombre = sanitize(nombretmp);
    const empresa = json.find(js => js.n.includes(nombre));

    const regexSpaces = /\s/gi;
    const nombrefile = nombre.replace(regexSpaces, '-', 'ig');

    console.log(nombre, ' | ', empresa ? empresa.nombre : 'NOT FOUND!!');

    if (empresa && empresa.nombre) {
      return sharp(`${logosURL}/${logo}`)
        .resize(200, 200)
        .jpeg({ quality: 85 })
        .toFile(`${logoEndURL}/${nombrefile}.jpeg`)
        .then(() => ({ ...empresa, n: nombre, img: `/public/logos/${nombrefile}.jpeg` }));
    }

    return null;
  }));

  const jsonfinal = json.map((lcl) => {
    const loclfoto = logos.find(l => l && l.n === lcl.n);

    return loclfoto || lcl;
  });

  console.log(logos.length, jsonfinal.length, json.length);

  await writeFile(dataFile, JSON.stringify(jsonfinal), 'utf8');

  // eslint-disable-next-line
  return res.json({
    logos,
    img: json.map(js =>
      ((logos.find(l => l && l.nombre === js.nombre) || {}).img
        ? null
        : { status: 'SIN_IMAGEN', nombre: js.nombre })),
    locales: jsonfinal,
  });
});

app.get('/cats', async (req, res) => {
  const catsURL = `${srcURL}/newcats.json`;
  const jsonURL = `${srcURL}/data.json`;
  const dataURL = `${srcURL}/data-bruta.json`;

  const newcats = await readFile(catsURL, 'utf8').then(JSON.parse);
  const jsontmp = await readFile(jsonURL, 'utf8').then(JSON.parse);
  const datatmp = await readFile(dataURL, 'utf8').then(JSON.parse);

  const newdata = `${srcURL}/newdata.json`;

  console.log(newcats.length, jsontmp.length, datatmp.length, 'CANTIDADES');

  const cats = {};

  const newjson = jsontmp
    .map((lcl) => {
      const local = newcats.find(l => l.Nombre === lcl.nombre);

      if (!local) {
        console.log(lcl, 'NOT FOUND');
        return false;
      }

      cats[local['Categoría Principal']] = local['Categoría Principal'];

      return {
        ...lcl,
        cat: local['Categoría Principal'],
        subcat: local['Subcategoría 1'],
      };
    })
    .filter(d => d);

  await writeFile(newdata, JSON.stringify([...new Set(newjson)]), 'utf8');

  res.json({ locales: [...new Set(newjson)], categorias: cats });
});

// app.get('*', (req, res) => res.redirect('/cats'));

const server = http.createServer(app);
server.listen({ port: 3001, host: '127.0.0.1' }, () => {
  console.log('SERVER STARTED');
});
