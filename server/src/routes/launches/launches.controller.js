const {
  getAllLaunches,
  addNewLaunch,
  exsitsLaunchWithId,
  abortLaunchWithId,
} = require('../../models/launches.model');

function httpgetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: 'Missing Required Launch property',
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Inavalid Date Launch',
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
}
function httpAbortLaunch(req, res) {
  const LaunchId = Number(req.params.id);
  //if Launch Doesn't exist

  if (!exsitsLaunchWithId(LaunchId)) {
    return res.status(404).json({
      error: 'Launch Not found',
    });
  }
  const aborted = abortLaunchWithId(LaunchId);
  return res.status(200).json(aborted);
}
module.exports = {
  httpgetAllLaunches,

  httpAddNewLaunch,
  httpAbortLaunch,
};
