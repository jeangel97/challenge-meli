import React from 'react';
import { render } from '@testing-library/react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

describe('BreadCrumb Component', () => {
  test('should render correctly', () => {
    const categories = ['Audio', 'Stereo', 'Mp3'];
    const component = render(<BreadCrumb categories={categories} />);
    component.getByText('Audio');
    component.getByText('Stereo');
    component.getByText('Mp3');
  });
  test('should render empty div', () => {
    const categories = [];
    const { container } = render(<BreadCrumb categories={categories} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
