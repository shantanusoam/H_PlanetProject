const { getAllLaunches, addNewLaunch } = require('../../models/launches.model');

function httpgetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (!launch) return res.status(200).json(addNewLaunch());
}
module.exports = {
  httpgetAllLaunches,

  httpAddNewLaunch,
};
