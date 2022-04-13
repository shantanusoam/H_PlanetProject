const express = require('express');
const { GetAllLaunches } = require('./launches.controller.js');

const launchesRouter = express.Router();
launchesRouter.get('/launches', GetAllLaunches);
module.exports = launchesRouter;
