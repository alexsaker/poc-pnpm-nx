const assert = require('assert');

test('hello world!', () => {
  const error = (value) => {
    if (typeof value !== 'string') {
      throw new Error('Invalid value');
    }
    return value;
  };

  assert.strictEqual(error('test'), 'test');
});
