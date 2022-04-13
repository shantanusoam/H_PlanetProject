const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Falcon 9',
  launch_date_utc: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);
module.exports = {
  launches,
};
