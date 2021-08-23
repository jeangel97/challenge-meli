import React from 'react';
import { render } from '@testing-library/react';
import Item from './Item';

describe('Item Component', () => {
  test('should render correctly', () => {
    const item = {
      id: 'PEXGG',
      title: 'Nintendo Switch',
      price: {
        currency: 'ARS',
        amount: 2023,
        decimals: 0,
      },
      picture: '/../../assets/Logo_ML.png',
      condition: 'new',
      free_shipping: false,
      address: 'capital federal',
    };
    const component = render(<Item item={item} />);
    component.getByText('Nintendo Switch');
    component.getByText('2.023');
  });

  test('should show free_shipping icon', () => {
    const item = {
      id: 'PEXGG',
      title: 'Nintendo Switch 2',
      price: {
        currency: 'ARS',
        amount: 2024,
        decimals: 0,
      },
      picture: '/../../assets/Logo_ML.png',
      condition: 'new',
      free_shipping: true,
      address: 'capital federal',
    };

    const component = render(<Item item={item} />);
    component.getByText('Nintendo Switch 2');
    component.getByText('2.024');
    component.getByTestId('shipping_icon');
  });
});
