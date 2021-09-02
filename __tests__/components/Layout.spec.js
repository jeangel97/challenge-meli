/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../../components/Layout/Layout';

describe('Layout Component', () => {
  test('should render correctly', () => {
    const component = render(<Layout> <span>test children</span> </Layout>);
    component.getByPlaceholderText('Nunca dejes de buscar');
    component.getByText('test children');
  });
});
