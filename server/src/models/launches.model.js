const { throws } = require('assert');
const launchesDatabase = require('./launches.mongo');
const planets = require('./planets.mongo');
const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Falcon 9',
  launch_date_utc: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customer: ['ZTM', 'ISRO'],
  upcoming: true,
  success: true,
};

const DEFAULT_FLIGHT_NUMBER = 100;
saveLaunch(launch);
// launches.set(launch.flightNumber, launch);

async function exsitsLaunchWithId(launchId) {
  return await launchesDatabase.findOne({ flightNumber: launchId });
}
async function getLatestFlightNumber() {
  const latestlaunch = await launchesDatabase.findOne().sort('-flightNumber');
  if (!latestlaunch) {
    return DEFAULT_FLIGHT_NUMBER;
  }
  return latestlaunch.flightNumber;
}
async function saveLaunch(launch) {
  const planet = await planets.findOne({
    keplerName: launch.target,
  });
  if (!planet) {
    throw new Error('No Matching Planet Found');
  }
  await launchesDatabase.findOneAndUpdate(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    {
      upsert: true,
    }
  );
}

async function abortLaunchWithId(launchId) {
  const aborted = await launchesDatabase.updateOne(
    {
      flightNumber: launchId,
    },
    {
      upcoming: false,
      success: false,
    }
  );

  // const aborted = launches.get(launchId);
  // aborted.upcoming = false;
  // aborted.success = false;
  // return aborted;
}

async function getAllLaunches() {
  return await launchesDatabase.find(
    {},
    {
      __v: 0,
      _id: 0,
    }
  );
}

async function scheduleNewLaunch(launch) {
  const newFlightNumber = (await getLatestFlightNumber()) + 1;
  const newLaunch = Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ['APYA Industary', 'ISRO'],
    flightNumber: newFlightNumber,
  });
  await saveLaunch(newLaunch);
}

// function addNewLaunch(launch) {
//   latestFlightNumber++;
//   launches.set(
//     launch.flightNumber,
//     Object.assign(launch, {
//       customers: ['Antonio', 'Nasa'],
//       flightNumber: latestFlightNumber,
//       upcoming: true,
//       success: true,
//     })
//   );
// }

module.exports = {
  getAllLaunches,

  scheduleNewLaunch,
  exsitsLaunchWithId,
  abortLaunchWithId,
};

function addelemnt(a) {
  return function addSecondElement(b, c) {
    return b + a;
  };
}
console.log(addelemnt(2)(3, 5));
