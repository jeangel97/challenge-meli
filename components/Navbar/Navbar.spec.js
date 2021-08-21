import { render } from '@testing-library/react'
import Navbar from './Navbar';

describe('Navbar Component', () => {

    test('should redender correctly', () => {
        const component = render(<Navbar/>)
        component.getByPlaceholderText("Nunca dejes de buscar");
    })
    
})
