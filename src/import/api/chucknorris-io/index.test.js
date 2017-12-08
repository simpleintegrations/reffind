
import chuckAPI from './index';

it('should be a valid object', () => {
  expect(chuckAPI).toBeDefined();
});

it('should contain the expected methods', () => {
  expect(chuckAPI).toBe(expect.objectContaining({
    categories: expect.any(Function),
    randomChuck: expect.any(Function),
    randomChuckWithCategory: expect.any(Function),
    search: expect.any(Function),
  }));
});
