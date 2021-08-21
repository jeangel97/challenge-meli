import { render } from '@testing-library/react'
import Layout from './Layout'
describe('Layout Component', () => {
    test('should render correctly', () => {
        const component = render(<Layout> <span>test children</span> </Layout>)
        component.getByPlaceholderText("Nunca dejes de buscar");
        component.getByText("test children");
    })
    
})
