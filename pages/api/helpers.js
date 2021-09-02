/* eslint-disable no-restricted-syntax */
/**
 * Author of the project
 */
export const author = {
  name: 'Jesus Angel',
  last_name: 'Feliciano Martinez',
};
/**
 * Map an array of items to the frontend format
 * @param items - array of items to be mapped
 * @returns - an array of items mapped
 */
export const itemsMapped = (items) => {
  const itemsMappedResult = items.map((item) => {
    const itemMapped = {
      id: item.id,
      title: item.title,
      price: {
        currency: item.prices.presentation.display_currency,
        amount: item.price,
        decimals: Number((item.price - Math.floor(item.price)).toFixed(2)),
      },
      picture: item.thumbnail.replace(/-I\./, '-F.'),
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      address: item.address.state_name,
    };
    return itemMapped;
  });
  return itemsMappedResult;
};
/**
 * Creates an array of categories with the filters of the response
 * @param  filters - filters of the response
 * @returns - an array of categories from the path from root
 */
export const getCategories = (filters) => {
  const categories = [];

  if (filters.length) {
    const category = filters.filter((filter) => filter.id === 'category');

    if (category[0].values.length && category[0].values[0].path_from_root.length) {
      for (const path of category[0].values[0].path_from_root) {
        categories.push(path.name);
      }
    }
  }
  return categories;
};
/**
 * Map the detailed version of the item with description
 * @param item - item object to be mapped
 * @param {string} description - description to be added in the map
 * @returns - an item object mapped
 */
export const singleItemMap = (item, description) => {
  const itemMapped = {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: Number((item.price - Math.floor(item.price)).toFixed(2)),
    },
    picture: item.thumbnail.replace(/-I\./, '-F.'),
    condition: item.condition,
    sold_quantity: item.sold_quantity,
    free_shipping: item.shipping.free_shipping,
    description,
  };
  return itemMapped;
};
