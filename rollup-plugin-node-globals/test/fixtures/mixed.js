if (process.env.NODE_ENV !== 'production') {
  throw Error('should be a production');
}

if (dirname !== __dirname) {
  throw new Error('invlaid __dirname');
}
if (filename !== __filename) {
  throw new Error('invlaid __filename');
}

var timeout;
if (global.setImmediate) {
  timeout = global.setImmediate;
} else {
  timeout = global.setTimeout;
}
if (typeof timeout !== 'function') {
  throw new Error('no timeout');
}

var buf = new Buffer('foo');
if (!Buffer.isBuffer(buf)) {
  throw new Error('not a buffer');
}
if (buf.toString() !== 'foo') {
  throw new Error('wrong thing!');
}
