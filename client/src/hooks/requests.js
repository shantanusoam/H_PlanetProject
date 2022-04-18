const API_URL = 'http://localhost:8000';
// TODO: Once API is ready.
// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

// TODO: Once API is ready.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sot((a, b) => {
    return a.flightNumber - b.flightNumber;
  });

  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

// TODO: Once API is ready.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      // Delete launch with given ID.
      method: 'delete',
    });
  } catch (err) {
    console.log(err);
    return {
      ok: false,
    };
  }
}
export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
