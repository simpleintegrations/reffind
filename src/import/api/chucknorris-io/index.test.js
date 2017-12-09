
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
  expect.assertions(2);
  return chuckAPI.categories().then(result => {
    expect(result).toHaveProperty('categories');
    expect(result).toHaveProperty('error');
  });
});

test('should cause an exception if no "category" supplied to randomChuckWithCategory', () => {
  expect.assertions(1);
  return chuckAPI.randomChuckWithCategory().catch(err => {
    expect(err).toBe('Must supply a "category"');
  });
});

test('should return an correct object when asking for randomChuckWithCategory', () => {
  expect.assertions(2);
  return chuckAPI.randomChuckWithCategory('dev').then(result => {
    expect(result).toHaveProperty('facts');
    expect(result).toHaveProperty('error');
  });
});

test('should cause an exception if no "query" supplied to search', () => {
  expect.assertions(1);
  return chuckAPI.search().catch(err => {
    expect(err).toBe('Must supply a "query"');
  });
});

test('should return an correct object when asking for search', () => {
  expect.assertions(2);
  return chuckAPI.search('monkey wrench').then(result => {
    expect(result).toHaveProperty('facts');
    expect(result).toHaveProperty('error');
  });
});
