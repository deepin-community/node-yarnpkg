var buf = {};
if (Buffer.isBuffer(buf)) {
  throw new Error('is a buffer');
}
