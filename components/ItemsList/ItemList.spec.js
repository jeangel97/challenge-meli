import React from 'react';
import { render } from '@testing-library/react';
import ItemsList from './ItemsList';

describe('ItemList Component', () => {
  test('should render correctly', () => {
    const items = [{
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
    }];
    const component = render(<ItemsList items={items} />);
    component.getByText('Peluches Pokemon Go 20 Cm Varios Modelos Pikachu Pokemones');
    component.getByText('Bolsa De 72 Pokémon 2-3 Cm Al Azar Pvc Sin Repetir');
    component.getByText('Pokemon Go Pokebola Pikachu Mas Accesorios');
    component.getByText('1.080');
    component.getByText('5.700');
    component.getByText('2.299');
  });
});
