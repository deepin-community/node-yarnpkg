// Special case for spread operator
const a = {};
const b = {...a};

if (!process.browser) {
  throw Error('must be a browser');
}
