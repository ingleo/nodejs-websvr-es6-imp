import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv';
import hbs from 'hbs';

import './hbs/helpers.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Express as web server
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'leonardo gonzalez',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic');
});

app.get('/elements', (req, res) => {
  res.render('elements');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
