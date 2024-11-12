const add = require('./add')


describe('add', () => {
    test('it should return 0 if empty string', () => {
        expect(add('')).toBe(0);
    });

    test('it should return summation of numbers', () => {
        expect(add('1,5')).toBe(6);
        expect(add('1\n2,3')).toBe(6);
    });
});