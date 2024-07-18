import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Users from './Users';
import { server } from '../tests/mocks/node';
import { HttpResponse, http } from 'msw';

describe('Users component', () => {
    it('Should render correctly', () => {
        render(<Users />);

        // Assert element exists
        expect(screen.getByTestId('loading')).toBeInTheDocument();
    });

    it('Should render users correctly after loading', async () => {
        render(<Users />);

        // Wait for loading
        const loading = screen.getByTestId('loading');
        await waitForElementToBeRemoved(loading);

        // Assert rendering users
        const userItem = screen.getAllByTestId('user');
        expect(userItem).toHaveLength(2);
    });

    it('Should render error correctly', async () => {
        // Mock error
        server.use(
            http.get('https://jsonplaceholder.typicode.com/users', async () => {
                return new HttpResponse(null, {
                    status: 500,
                });
            })
        );

        render(<Users />);

        // Assert rendering error
        expect(await screen.findByTestId('error')).toBeInTheDocument();
    });
});
