import {Buffer} from 'buffer';
global.buf = {};
if (Buffer.isBuffer(global.buf)) {
  throw new Error('is a buffer');
}
