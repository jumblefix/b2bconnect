import axios from 'axios';
import { Server } from 'net';
import { TokenTypes } from './constants';
import { startServer } from './start-server';

let server: Server;
beforeAll(async () => {
  server = await startServer();
});

afterAll(async () => {
  if (server) {
    await server.close();
  }
});

const { TEST_HOST } = process.env;

describe('start-server', () => {
  it('should start', async () => {
    const { data } = await axios.get(`${TEST_HOST}/`);
    expect(data).toMatchSnapshot();
  });

  it('confirm', async () => {
    const { data } = await axios.get(`${TEST_HOST}/${TokenTypes.confirm}/abc`);
    expect(data).toMatchSnapshot();
  });

  it('reset', async () => {
    const { data } = await axios.get(`${TEST_HOST}/${TokenTypes.reset}/abc`);
    expect(data).toMatchSnapshot();
  });
});
