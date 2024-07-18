import { sum } from './sum';

describe('sum function', () => {
    test('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(-1, 1)).toBe(0);
        expect(sum(0, 0)).toBe(0);
        expect(sum(5, 7)).toBe(12);
    });
});
