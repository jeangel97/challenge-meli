import { waitFor, screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import { server } from '../../test-utils/mock-server';

describe('Items/:id Page', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('should render correctly', async () => {
    const { render } = await getPage({ route: '/items/ML' });
    render();
    await waitFor(() => {
      expect(screen.getByText('Nintendo Switch')).toBeInTheDocument();
      expect(screen.getByText('2.023')).toBeInTheDocument();
      expect(screen.getByText('Nuevo', { exact: false })).toBeInTheDocument();
      expect(screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')).toBeInTheDocument();
    });
  });
});
