import { add } from './calculator';

// test away!
test('5 + 10 = 15', () => {
  expect(add(5, 10)).toBe(15);
});
