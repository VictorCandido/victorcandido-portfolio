import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
    it('should have a header', () => {
        render(<Home />);

        const headerElement = screen.getByRole('heading', {
            name: 'Victor Candido Portfolio'
        });

        expect(headerElement).toBeTruthy();
    });

    it('should have a button with "Click me" label', () => {
        render(<Home />);

        const buttonElement = screen.getByRole('button', {
            name: 'Click me'
        });

        expect(buttonElement).toBeTruthy();
    });

})