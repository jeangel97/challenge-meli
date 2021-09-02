/* eslint-disable import/no-extraneous-dependencies */
/* istanbul ignore file */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './server-handler';

const server = setupServer(...handlers);
export { server, rest };
