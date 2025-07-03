function trickYou(process) {
  if (process.browser) {
    throw new Error('should not be replaced');
  }
}
trickYou({browser: false});
