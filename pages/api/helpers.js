/* eslint-disable no-restricted-syntax */
export const author = {
  name: 'Jesus Angel',
  last_name: 'Feliciano Martinez',
};

export const itemsMapped = (items) => {
  const itemsMappedResult = items.map((item) => {
    const itemMapped = {
      id: item.id,
      title: item.title,
      price: {
        currency: item.prices.presentation.display_currency,
        amount: item.price,
        decimals: 0,
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
