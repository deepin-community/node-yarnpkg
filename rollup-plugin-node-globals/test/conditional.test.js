const { readFileSync } = require('fs');
const { rollup } = require('rollup');
const nodeGlobals = require('../');

test.each([
  ['process'],
  ['buffer'],
  ['dirname'],
  ['filename'],
  ['global']
])('conditionally polyfills %s', async name => {
  const options = {
    baseDir: process.cwd(),
    process: false,
    buffer: false,
    dirname: false,
    filename: false,
    global: false,
    [name]: true
  };
  const bundle = await rollup({
    input: 'test/fixtures/mixed.js',
    plugins: [nodeGlobals(options)]
  })
  const { code } = await bundle.generate({ format: 'esm' })
  expect(code).toMatchSnapshot();
})

