import { waitFor, screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import { server } from '../test-utils/mock-server';

describe('Items Page', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('should render correctly', async () => {
    const { render } = await getPage({ route: '/items' });
    render();
    await waitFor(() => {
      expect(screen.getByText('Peluches Pokemon Go 20 Cm Varios Modelos Pikachu Pokemones')).toBeInTheDocument();
      expect(screen.getByText('Bolsa De 72 Pokémon 2-3 Cm Al Azar Pvc Sin Repetir')).toBeInTheDocument();
      expect(screen.getByText('Pokemon Go Pokebola Pikachu Mas Accesorios')).toBeInTheDocument();
      expect(screen.getByText('1.080')).toBeInTheDocument();
      expect(screen.getByText('5.700')).toBeInTheDocument();
      expect(screen.getByText('2.299')).toBeInTheDocument();
    });
  });
});
