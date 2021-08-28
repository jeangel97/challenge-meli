/* eslint-disable no-underscore-dangle */
import { createMocks } from 'node-mocks-http';
import handlerSearch from './items';

describe('items api endpoint', () => {
  test('should return status 200 ', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        q: 'pikachu',
      },
    });
    await handlerSearch(req, res);
    expect(res._getStatusCode()).toBe(
      200,
    );
  });
  test('should throw error when query it is not defined  ', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        j: true,
      },
    });
    await handlerSearch(req, res);
    expect(res._getStatusCode()).toBe(
      200,
    );
  });
});
