
import chuckAPI from './index';

it('should be a valid object', () => {
  expect(chuckAPI).toBeDefined();
});

it('should contain the expected properties', () => {
  expect(chuckAPI).toHaveProperty('categories');
  expect(chuckAPI).toHaveProperty('randomChuckWithCategory');
  expect(chuckAPI).toHaveProperty('search');
});

it('should return an correct object when asking for categories', () => {
  expect.assertions(2);
  return chuckAPI.categories().then(result => {
    expect(result).toHaveProperty('categories');
    expect(result).toHaveProperty('error');
  });
});

it('should return an array in the "categories" when asking for categories', () => {
  expect.assertions(3);
  return chuckAPI.categories().then(result => {
    expect(Array.isArray(result.categories)).toBe(true);
    expect(result.categories).toHaveLength(16);
    expect(result.error).toBeNull();
  });
});

it('should return an correct object when asking for randomChuckWithCategory', () => {
  expect.assertions(5);
  return chuckAPI.randomChuckWithCategory('dev').then(result => {
    expect(result).toHaveProperty('facts');
    expect(Array.isArray(result.facts)).toBe(true);
    expect(result.facts).toHaveLength(1);
    expect(result).toHaveProperty('error');
    expect(result.error).toBeNull();
  });
});

it('should return an correct object when asking for search', () => {
  expect.assertions(2);
  return chuckAPI.search('monkey wrench').then(result => {
    expect(result).toHaveProperty('facts');
    expect(result).toHaveProperty('error');
  });
});
