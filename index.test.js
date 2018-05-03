import normalizeURL from './index.js';

describe('normalize-url', () => {
  it('works', () => {
    expect(normalizeURL('http://test//foo')).toBe('http://test/foo');
  });
});
