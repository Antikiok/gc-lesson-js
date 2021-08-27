import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should get null because string', () => {
  const result = getMinSquaredNumber('some string');
  expect(result).toEqual(null);
});

it('should get null to empty array', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should get squared numbers', () => {
  const result = getMinSquaredNumber([-777, 3, 6, 9, 45, -20]);
  expect(result).toEqual(9);
});
