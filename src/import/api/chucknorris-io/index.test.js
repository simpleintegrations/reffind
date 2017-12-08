
import chuckAPI from './index';

test('should be a valid object', () => {
  expect(chuckAPI).toBeDefined();
});

test('should contain the expected properties', () => {
  expect(chuckAPI).toHaveProperty('categories');
  expect(chuckAPI).toHaveProperty('randomChuckWithCategory');
  expect(chuckAPI).toHaveProperty('search');
});

test('should return an correct object when asking for categories', () => {
  chuckAPI.categories().then(result => {
    expect(result).toHaveProperty('categories');
    expect(result).toHaveProperty('error');
  });
});
