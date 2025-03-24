import { test, expect } from 'vitest';
import { sum } from './lib';

test('test sum', () => {
  expect(sum(1, 2)).toBe(3);
});
