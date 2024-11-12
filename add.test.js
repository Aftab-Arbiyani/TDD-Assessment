const add = require('./add')


describe('add', () => {
    test('it should return 0 if empty string', () => {
        expect(add('')).toBe(0);
    });
});