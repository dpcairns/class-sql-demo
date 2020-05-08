require('dotenv').config();

const fakeRequest = require('supertest');
const app = require('../lib/app.js');

describe('app routes', () => {
  beforeAll(() => {
    // TODO: a
  });

  beforeEach(() => {
    // TODO: ADD DROP SETUP DB SCRIPT
  });

  afterAll(() => {
    // TODO: ADD CLOSE DB SCRIPT
  });

  test('returns songs', async() => {

    const expectation =  [
      {
        id: 1,
        name: 'thriller',
        artist: 'mj',
        length: 3,
        user_id: 1,
        is_single: false
      },
      {
        id: 2,
        name: 'country roads',
        artist: 'john denver',
        length: 2,
        user_id: 1,
        is_single: true
      },
      {
        id: 3,
        name: 'DROP TABLE songs;',
        artist: 'tom petty',
        length: 3,
        user_id: 1,
        is_single: true
      }
    ];
    

    const data = await fakeRequest(app)
      .get('/songs')
      .expect('Content-Type', /json/)
      .expect(200);
      
    expect(data.body).toEqual(expectation);
  });
});
