import React from 'react';
import { render } from '@testing-library/react';
import CategoriesContext from '../../context/CategoriesContext';

describe('Categories Context', () => {
  test('should create context', () => {
    const component = render(
      <CategoriesContext.Provider
        value={{ categories: [], setCategories: jest.fn() }}
      >
        <div>Context test</div>
      </CategoriesContext.Provider>,
    );
    component.findByText('Context test');
  });
});
