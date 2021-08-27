import { getAdults } from './getAdults';
import { reverseArray } from './reverseArray';
import { withdraw } from './withdraw';

it('Should keep onle who older 18 years', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('Should get 56 year old', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('Should get empty array', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('Should get account balance 37', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('Should get account balance -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it('Should get account balance 143', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1257);
  expect(result).toEqual(143);
});

it('', () => {
  const result = reverseArray([11, 22, 33, 44]);
  expect(result).toEqual([44, 33, 22, 11]);
});

it('', () => {
  const result = reverseArray([4, 7, 2, 9]);
  expect(result).toEqual([9, 2, 7, 4]);
});

it('', () => {
  const result = reverseArray('some string');
  expect(result).toEqual(null);
});
