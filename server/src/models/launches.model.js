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

launches.set(launch.flightNumber, launch);

function exsitsLaunchWithId(launchId) {
  return launches.has(launchId);
}
function abortLaunchWithId(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      customers: ['Antonio', 'Nasa'],
      flightNumber: latestFlightNumber,
      upcoming: true,
      success: true,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  exsitsLaunchWithId,
  abortLaunchWithId,
};

function addelemnt(a) {
  return function addSecondElement(b, c) {
    return b + a;
  };
}
console.log(addelemnt(2)(3, 5));
