/* eslint-disable no-underscore-dangle */
import { createMocks, createRequest } from 'node-mocks-http';
import handlerSearch from '../../../pages/api/items';

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
    try {
      const req = createRequest({
        method: 'GET',
        query: {
          z: 'pikachu',
        },
      });
      await handlerSearch(req);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
