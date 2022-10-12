const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
describe('Test POST /launch', () => {
  const completeLaunchDate = {
    mission: 'ISS Entrospect Radio enterprise',
    rocket: 'SLV 3',
    target: 'Kapler-186 B',
    launchDate: 'janurary 4, 2028',
  };
  const launchDataWithoutDate = {
    mission: 'ISS Entrospect Radio enterprise',
    rocket: 'SLV 3',
    target: 'Kapler-186 B',
  };
  const launchDataWithInvalidDate = {
    mission: 'ISS Entrospect Radio enterprise',
    rocket: 'SLV 3',
    target: 'Kapler-186 B',
    launchDate: 'sdfs',
  };
  test('It should respond with 2001 created', async () => {
    const response = await request(app)
      .post('/launches')
      .send(completeLaunchDate)
      .expect('Content-Type', /json/)
      .expect(201);
    const requestDate = new Date(completeLaunchDate.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test('its should catch missing required properties', async () => {
    const response = await request(app)
      .post('/launches')
      .send(launchDataWithoutDate)
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body).toStrictEqual({
      error: 'Missing Required Launch property',
    });
  });
  test('It sHould catch invalid dates', async () => {
    const response = await request(app)
      .post('/launches')
      .send(launchDataWithInvalidDate)
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body).toStrictEqual({
      error: 'Inavalid Date Launch',
    });
  });
});
