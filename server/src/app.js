const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const planetRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();
// var whitelist = ['http://localhost:3000']
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(planetRouter);
app.use(launchesRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use;
module.exports = app;
