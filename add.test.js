const add = require('./add')


describe('add', () => {
    test('it should return 0 if empty string', () => {
        expect(add('')).toBe(0);
    });

    test('it should return summation of numbers', () => {
        expect(add('1,5')).toBe(6);
        expect(add('1\n2,3')).toBe(6);
    });

    test('should handle custom and repeating delimiters', () => {
        expect(add('//;\n1;2;3')).toBe(6);
        expect(add('//|\n1|5|3')).toBe(9);
        expect(add('//[***]\n1***2***3')).toBe(6);
        expect(add('//[***][%]\n1***2%100')).toBe(103);
    });

    test('should ignore numbers greater than 1000', () => {
        expect(add('1001, 2')).toBe(2);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add('-1,2,-3')).toThrow('Negative numbers not allowed: -1, -3');
    });
});