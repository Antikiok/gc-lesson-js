import { calc } from './calculator';

it('should get sum a + b', () => {
  const result = calc('4 + 2');
  expect(result).toEqual('4 + 2 = 6');
});

it('should get sum a - b', () => {
  const result = calc('4 - 2');
  expect(result).toEqual('4 - 2 = 2');
});

it('should get sum a * b', () => {
  const result = calc('4 * 2');
  expect(result).toEqual('4 * 2 = 8');
});

it('should get sum a / b', () => {
  const result = calc('4 / 2');
  expect(result).toEqual('4 / 2 = 2');
});

it('should get null if not stirng', () => {
  const result = calc(1, 2);
  expect(result).toEqual(null);
});
