import '@testing-library/jest-dom';
import { server } from './mocks/node';

beforeEach(() => {
    // Enable mocking
    server.listen();
});

afterEach(() => {
    // Disable mocking
    server.resetHandlers();
});

afterAll(() => {
    // Clean up once the tests are done
    server.close();
});
