const {
  getAllLaunches,
  scheduleNewLaunch,
  exsitsLaunchWithId,
  abortLaunchWithId,
} = require('../../models/launches.model');

async function httpgetAllLaunches(req, res) {
  return res.status(200).json(await getAllLaunches());
}

async function httpAddNewLaunch(req, res) {
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
  await scheduleNewLaunch(launch);
  return res.status(201).json(launch);
}
async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  const existsLaunch = await exsitsLaunchWithId(launchId);

  //if Launch Doesn't exist

  if (!existsLaunch) {
    return res.status(404).json({
      error: 'Launch Not found',
    });
  }
  const aborted = await abortLaunchWithId(LaunchId);
  return res.status(200).json(aborted);
}
module.exports = {
  httpgetAllLaunches,

  httpAddNewLaunch,
  httpAbortLaunch,
};
