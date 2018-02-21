//require express a webserver module
const express = require('express');

const books = require('./books.json');


//created express server
const app = express();

app.use(express.static('www'));

app.get('/books/author/:author', (req, res) => {
  let chosen = books.filter((book) => {return book.author.includes(req.params.author)});
  res.json(chosen);
});
app.get('/books/country/:country', (req, res) => {
  let chosen = books.filter((book) => {return book.country.toLowerCase().includes(req.params.country)});
  res.json(chosen);
});
app.get('/books/language/:language', (req, res) => {
  let chosen = books.filter((book) => {return book.language.toLowerCase().includes(req.params.language)});
  res.json(chosen);
});
app.get('/books/pages/:pages', (req, res) => {
  let chosen = books.filter((book) => {return book.pages >= req.params.pages});
  res.json(chosen);
});
app.get('/books/title/:title', (req, res) => {
  let chosen = books.filter((book) => {return book.title.toLowerCase().includes(req.params.title)});
  res.json(chosen);
});
app.get('/books/year/:year', (req, res) => {
  let chosen = books.filter((book) => {return book.year == req.params.year});
  res.json(chosen);
});

app.get('*', (req, res) => {
  res.send(`Där finns ingen bok som inehåller det du sökt efter`)
});


app.listen(3000, ()=>{
  console.log('Listening on port 3000');
});
