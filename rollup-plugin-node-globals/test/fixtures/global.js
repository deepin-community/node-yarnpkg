var timeout;
if (global.setImmediate) {
  timeout = global.setImmediate;
} else {
  timeout = global.setTimeout;
}
if (typeof timeout !== 'function') {
  throw new Error('no timeout');
}
