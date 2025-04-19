// app.js
const express = require('express');
const path = require('path');
const datasets = require('./data/datasets');
const app = express();

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static files
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));

// Route
app.get('/', (req, res) => {
  const id = req.query.dataset || '1';
  const data = datasets[id] || datasets['1'];
  res.render('expense', { data, datasetId: id });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
