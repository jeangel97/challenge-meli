/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* istanbul ignore file */
import { rest } from 'msw';
import { API_ROUTE_ITEMS, API_ROUTE_ITEMS_ID } from '../config';

/**
 * Mock handlers for the serverSideProps tests
 */

const handlers = [
  rest.get(API_ROUTE_ITEMS, (_req, res, ctx) => res(ctx.json({
    author: { name: 'Jesus Angel', last_name: 'Feliciano Martinez' },
    categories: ['Juegos y Juguetes'],
    items: [
      {
        id: 'MLA838504614',
        title: 'Peluches Pokemon Go 20 Cm Varios Modelos Pikachu Pokemones',
        price: { currency: 'ARS', amount: 1080, decimals: 0 },
        picture: '/../../assets/Logo_ML.png',
        condition: 'new',
        free_shipping: false,
        address: 'capital federal',
      },
      {
        id: 'MLA678267666',
        title: 'Bolsa De 72 Pokémon 2-3 Cm Al Azar Pvc Sin Repetir',
        price: { currency: 'ARS', amount: 5700, decimals: 0 },
        picture: '/../../assets/Logo_ML.png',
        condition: 'new',
        free_shipping: true,
        address: 'capital federal',
      },
      {
        id: 'MLA882227206',
        title: 'Pokemon Go Pokebola Pikachu Mas Accesorios',
        price: { currency: 'ARS', amount: 2299, decimals: 0 },
        picture: '/../../assets/Logo_ML.png',
        condition: 'new',
        free_shipping: false,
        address: 'capital federal',
      },
    ],
  }))),
  rest.get(`${API_ROUTE_ITEMS_ID}:id`, (_req, res, ctx) => res(ctx.json({
    author: { name: 'Jesus Angel', last_name: 'Feliciano Martinez' },
    item: {
      id: 'PEXGG',
      title: 'Nintendo Switch',
      price: {
        currency: 'ARS',
        amount: 2023,
        decimals: 0,
      },
      picture: '/../../assets/logito.png',
      condition: 'new',
      free_shipping: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  }))),
];
export { handlers };
