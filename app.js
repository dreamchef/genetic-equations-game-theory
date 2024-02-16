const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('resources'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});