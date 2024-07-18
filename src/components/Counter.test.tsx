import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter component', () => {
    it('Should render correctly', () => {
        render(<Counter />);

        // Assert element exists
        expect(screen.getByTestId('decrease')).toBeInTheDocument();
        expect(screen.getByTestId('increase')).toBeInTheDocument();
        expect(screen.getByTestId('current')).toBeInTheDocument();

        // Assert rendering initial value
        expect(screen.getByTestId('current')).toHaveTextContent('0');
    });

    it('Should decrease and incrementing correctly'),
        async () => {
            render(<Counter />);
            const user = userEvent.setup();

            // Decreasing count
            const decreaseButton = screen.getByTestId('decrease');
            await user.click(decreaseButton);
            expect(screen.getByTestId('current')).toHaveTextContent('0');

            // Increasing count
            const increaseButton = screen.getByTestId('increase');
            await user.click(increaseButton);
            expect(screen.getByTestId('current')).toHaveTextContent('1');
        };
});
