import { add, subtract } from './calculator';

test('5 + 10 = 15', () => expect(add(5, 10)).toBe(15));
test('5 - 10 = -5', () => expect(subtract(5, 10)).toBe(-5));
test('NaN - 5 = NaN', () => expect(subtract(NaN, 5)).toBe(NaN));
