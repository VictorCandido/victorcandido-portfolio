import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
    it('should render successfully', () => {
        render(<Home />);

        const headerElement = screen.getByRole('heading', {
            name: 'Victor Candido Portfolio'
        });

        expect(headerElement).toBeTruthy();
    });
})