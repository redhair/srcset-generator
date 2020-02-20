const test = require('ava');
const resize = require('.');

test('should throw with an invalid source image', t => {
  t.throws(() => {
    resize();
  });

  t.throws(() => {
    resize('');
  });

  t.throws(() => {
    resize('abc');
  });
});
