var buf = new Buffer('foo');
if (!Buffer.isBuffer(buf)) {
  throw new Error('not a buffer');
}
if (buf.toString() !== 'foo') {
  throw new Error('wrong thing!');
}
