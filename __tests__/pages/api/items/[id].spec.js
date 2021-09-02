/* eslint-disable no-underscore-dangle */
import { createMocks, createRequest } from 'node-mocks-http';
import handler from '../../../../pages/api/items/[id]';

describe('Items [id] route api', () => {
  test('should return status 200 ', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        id: 'MLA920235742',
      },
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(
      200,
    );
  });
  test('should throw error when id is not defined', async () => {
    try {
      const req = createRequest({
        method: 'GET',
        query: {
          z: 'pikachu',
        },
      });
      await handler(req);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
