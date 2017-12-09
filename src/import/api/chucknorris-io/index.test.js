
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

it('should return an correct object when asking for randomChuckWithCategory', () => {
  expect.assertions(2);
  return chuckAPI.randomChuckWithCategory('dev').then(result => {
    expect(result).toHaveProperty('facts');
    expect(result).toHaveProperty('error');
  });
});

it('should return an correct object when asking for search', () => {
  expect.assertions(2);
  return chuckAPI.search('monkey wrench').then(result => {
    expect(result).toHaveProperty('facts');
    expect(result).toHaveProperty('error');
  });
});
