import React from 'react';
import { render } from '@testing-library/react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

describe('ItemDetail Component', () => {
  test('should render correctly', () => {
    const item = {
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
    };
    const component = render(<ItemDetail item={item} />);
    component.getByText('Nintendo Switch');
    component.getByText('2.023');
    component.getByText('Nuevo', { exact: false });
    component.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  });
  test('should show text Usado when the condition is not new', () => {
    const item = {
      id: 'PEXGG',
      title: 'Nintendo Switch 2',
      price: {
        currency: 'ARS',
        amount: 2024,
        decimals: 0,
      },
      picture: '/../../assets/logito.png',
      condition: 'used',
      free_shipping: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    };
    const component = render(<ItemDetail item={item} />);
    component.getByText('Nintendo Switch 2');
    component.getByText('2.024');
    component.getByText('Usado', { exact: false });
    component.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  });
});
