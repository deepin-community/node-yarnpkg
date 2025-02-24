const { readFileSync } = require('fs');
const { rollup } = require('rollup');
const nodeGlobals = require('../');

test.each([
  'buffer-import',
  'buffer-isBuffer',
  'buffer',
  'dirname',
  'global',
  'process-browser',
  'process-env',
  'process-generic',
  'process-nexttick',
  'process-sneaky',
])('polyfills %s', async name => {
  const input = `test/fixtures/${name}.js`
  const bundle = await rollup({
    input,
    plugins: [nodeGlobals({ baseDir: process.cwd() })]
  })
  const { code } = await bundle.generate({ format: 'esm' })
  expect(readFileSync(input, 'utf-8')).toMatchSnapshot('input');
  expect(code).toMatchSnapshot('output');
})
