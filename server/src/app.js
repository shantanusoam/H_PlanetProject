const express = require('express');
const cors = require('cors');
const planetRouter = require('./routes/planets/planets.router');

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

app.use(express.json());
app.use(planetRouter);
app.use;
module.exports = app;
