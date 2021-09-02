import { getCategories, itemsMapped, singleItemMap } from './helpers';

describe('helper functions', () => {
  test('should map the item to the defined format', () => {
    const items = [{
      id: 'MLA920235742',
      site_id: 'MLA',
      title: 'Nintendo Switch 32gb Animal Crossing: New Horizons Color Verde Pastel Y Azul Pastel',
      seller: {},
      price: 75218,
      prices: {
        id: 'MLA920235742',
        prices: [
          {
            id: '10',
            type: 'standard',
            conditions: {},
            amount: 75218,
            regular_amount: null,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            metadata: {
            },
            last_updated: '2021-08-27T22:24:51Z',
          },
        ],
        presentation: {
          display_currency: 'ARS',
        },
        payment_method_prices: [
        ],
        reference_prices: [
        ],
        purchase_discounts: [
        ],
      },
      sale_price: null,
      currency_id: 'ARS',
      available_quantity: 10,
      sold_quantity: 30,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_special',
      stop_time: '2041-05-06T04:00:00.000Z',
      condition: 'new',
      permalink: 'https://www.mercadolibre.com.ar/nintendo-switch-32gb-animal-crossing-new-horizons-color-verde-pastel-y-azul-pastel/p/MLA15698835',
      thumbnail: 'http://http2.mlstatic.com/D_913685-MLA41956780418_052020-I.jpg',
      thumbnail_id: '913685-MLA41956780418_052020',
      accepts_mercadopago: true,
      installments: {},
      address: {
        state_id: 'AR-C',
        state_name: 'Capital Federal',
        city_id: 'QVItQ1BhcnF1ZSBDaGFz',
        city_name: 'Parque Chas',
      },
      shipping: {
        free_shipping: true,
        mode: 'me2',
        tags: [],
        logistic_type: 'cross_docking',
        store_pick_up: false,
      },
      seller_address: {},
      attributes: [],
      original_price: null,
      category_id: 'MLA438566',
      official_store_id: null,
      domain_id: 'MLA-GAME_CONSOLES',
      catalog_product_id: 'MLA15698835',
      tags: [],
      catalog_listing: true,
      use_thumbnail_id: true,
      order_backend: 1,
    },
    {
      id: 'MLA925835178',
      site_id: 'MLA',
      title: 'Switch Tp-link Tl-sg105',
      seller: {},
      price: 2690,
      prices: {
        id: 'MLA925835178',
        prices: [
          {
            id: '5',
            type: 'standard',
            conditions: {},
            amount: 2690,
            regular_amount: null,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            metadata: {
            },
            last_updated: '2021-08-27T14:31:31Z',
          },
        ],
        presentation: {
          display_currency: 'ARS',
        },
        payment_method_prices: [
        ],
        reference_prices: [
        ],
        purchase_discounts: [
        ],
      },
      sale_price: null,
      currency_id: 'ARS',
      available_quantity: 17,
      sold_quantity: 76,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_special',
      stop_time: '2041-06-11T04:00:00.000Z',
      condition: 'new',
      permalink: 'https://www.mercadolibre.com.ar/switch-tp-link-tl-sg105/p/MLA12474488',
      thumbnail: 'http://http2.mlstatic.com/D_841067-MLA42400938033_062020-I.jpg',
      thumbnail_id: '841067-MLA42400938033_062020',
      accepts_mercadopago: true,
      installments: {},
      address: {
        state_id: 'AR-C',
        state_name: 'Capital Federal',
        city_id: 'TUxBQlJFQzkyMTVa',
        city_name: 'Recoleta',
      },
      shipping: {
        free_shipping: false,
        mode: 'me2',
        tags: [
        ],
        logistic_type: 'cross_docking',
        store_pick_up: false,
      },
      seller_address: {},
      attributes: [],
      original_price: null,
      category_id: 'MLA1708',
      official_store_id: null,
      domain_id: 'MLA-NETWORK_SWITCHES',
      catalog_product_id: 'MLA12474488',
      tags: [],
      catalog_listing: true,
      use_thumbnail_id: true,
      order_backend: 2,
    }];
    const itemsMappedResult = itemsMapped(items);
    expect(itemsMappedResult[0].title).toBe('Nintendo Switch 32gb Animal Crossing: New Horizons Color Verde Pastel Y Azul Pastel');
    expect(itemsMappedResult[1].title).toBe('Switch Tp-link Tl-sg105');
  });
  test('should get the categories from the filters', () => {
    const filters = [{
      id: 'category',
      name: 'Categories',
      type: 'text',
      values: [
        {
          id: 'MLA373840',
          name: 'Videojuegos',
          path_from_root: [
            {
              id: 'MLA1144',
              name: 'Consolas y Videojuegos',
            },
            {
              id: 'MLA373840',
              name: 'Videojuegos',
            },
          ],
        },
      ],
    },
    {
      id: 'FRANCHISE',
      name: 'Franquicia',
      type: 'STRING',
      values: [
        {
          id: '5265396',
          name: 'The Last of Us',
        },
      ],
    }];
    const categories = getCategories(filters);
    expect(categories).toStrictEqual(['Consolas y Videojuegos', 'Videojuegos']);
  });
  test('should show empty array when there is no filters ', () => {
    const filters = [];
    const categories = getCategories(filters);
    expect(categories).toStrictEqual([]);
  });

  test('should show empty array when there is no path from root values', () => {
    const filters = [{
      id: 'category',
      name: 'Categories',
      type: 'text',
      values: [
        {
          id: 'MLA373840',
          name: 'Videojuegos',
          path_from_root: [
          ],
        },
      ],
    },
    {
      id: 'FRANCHISE',
      name: 'Franquicia',
      type: 'STRING',
      values: [
        {
          id: '5265396',
          name: 'The Last of Us',
        },
      ],
    }];
    const categories = getCategories(filters);
    expect(categories).toStrictEqual([]);
  });

  test('should map single item format', () => {
    const item = {
      id: 'MLA920235742',
      site_id: 'MLA',
      title: 'Nintendo Switch 32gb Animal Crossing: New Horizons Color Verde Pastel Y Azul Pastel',
      seller: {},
      price: 75218,
      prices: {
        id: 'MLA920235742',
        prices: [
          {
            id: '10',
            type: 'standard',
            conditions: {},
            amount: 75218,
            regular_amount: null,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            metadata: {
            },
            last_updated: '2021-08-27T22:24:51Z',
          },
        ],
        presentation: {
          display_currency: 'ARS',
        },
        payment_method_prices: [
        ],
        reference_prices: [
        ],
        purchase_discounts: [
        ],
      },
      sale_price: null,
      currency_id: 'ARS',
      available_quantity: 10,
      sold_quantity: 30,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_special',
      stop_time: '2041-05-06T04:00:00.000Z',
      condition: 'new',
      permalink: 'https://www.mercadolibre.com.ar/nintendo-switch-32gb-animal-crossing-new-horizons-color-verde-pastel-y-azul-pastel/p/MLA15698835',
      thumbnail: 'http://http2.mlstatic.com/D_913685-MLA41956780418_052020-I.jpg',
      thumbnail_id: '913685-MLA41956780418_052020',
      accepts_mercadopago: true,
      installments: {},
      address: {
        state_id: 'AR-C',
        state_name: 'Capital Federal',
        city_id: 'QVItQ1BhcnF1ZSBDaGFz',
        city_name: 'Parque Chas',
      },
      shipping: {
        free_shipping: true,
        mode: 'me2',
        tags: [],
        logistic_type: 'cross_docking',
        store_pick_up: false,
      },
      seller_address: {},
      attributes: [],
      original_price: null,
      category_id: 'MLA438566',
      official_store_id: null,
      domain_id: 'MLA-GAME_CONSOLES',
      catalog_product_id: 'MLA15698835',
      tags: [],
      catalog_listing: true,
      use_thumbnail_id: true,
      order_backend: 1,
    };
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const itemMapped = singleItemMap(item, description);
    expect(itemMapped.title).toBe('Nintendo Switch 32gb Animal Crossing: New Horizons Color Verde Pastel Y Azul Pastel');
    expect(itemMapped.sold_quantity).toBe(30);
    expect(itemMapped.description).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  });
});
