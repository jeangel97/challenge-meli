/* eslint-disable global-require */
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

describe('Navbar Component', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  const router = { push: jest.fn() };
  useRouter.mockReturnValue(router);

  const setUpInputs = () => {
    const component = render(<Navbar />);
    const searchInput = component.getByLabelText('search_input');
    const searchButton = component.getByLabelText('search-button');

    return {
      searchInput,
      searchButton,
    };
  };

  test('should redender correctly', () => {
    const component = render(<Navbar />);
    component.getByPlaceholderText('Nunca dejes de buscar');
  });

  test('should type on search input', () => {
    const { searchInput } = setUpInputs();
    fireEvent.change(searchInput, { target: { value: 'Pokemon' } });
    expect(searchInput.value).toBe('Pokemon');
  });

  test('should go to the url /items?search="Pokemon" when clicking in the button', () => {
    const { searchInput, searchButton } = setUpInputs();
    fireEvent.change(searchInput, { target: { value: 'Pokemon' } });
    fireEvent.click(searchButton);
    expect(router.push).toHaveBeenCalledWith({ pathname: '/items', query: { search: 'Pokemon' } });
  });

  test('should go to the url /items?search="Pokemon 2" when hitting enter key', () => {
    const { searchInput } = setUpInputs();
    fireEvent.change(searchInput, { target: { value: 'Pokemon 2' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
    expect(router.push).toHaveBeenCalledWith({ pathname: '/items', query: { search: 'Pokemon 2' } });
  });

  test('should do nothing when hitting escape key', () => {
    const { searchInput } = setUpInputs();
    fireEvent.change(searchInput, { target: { value: 'Pokemon 3' } });
    fireEvent.keyDown(searchInput, { key: 'Escape', code: 'Escape' });
    expect(router.push).not.toHaveBeenCalledWith({ pathname: '/items', query: { search: 'Pokemon 3' } });
  });
});
