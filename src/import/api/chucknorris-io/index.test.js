
import chuckAPI from './index';

test('should be a valid object', () => {
  expect(chuckAPI).toBeDefined();
});

test('should contain the expected properties', () => {
  expect(chuckAPI).toHaveProperty('categories');
  expect(chuckAPI).toHaveProperty('randomChuckWithCategory');
  expect(chuckAPI).toHaveProperty('search');
});

test('should return an array when asking for categories', () => {
  const result = chuckAPI.categories();
  expect(result).toHaveProperty('result');
  expect(result).toHaveProperty('error');
  expect(result.error).toBeNull();
  expect(result.result).not.toBeNull();
  expect(result.result).toBe(expect.any(Array));
});
