
 const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function(key) {
    if (key === '\u0003') { // \u0003 maps to ctrl+c input
      console.log('exiting now');
      process.exit();
    }
  };
  stdin.on('data', (key) => { // on data input/key being pushed, call handleUserInput with the key being pushed
    handleUserInput(key);
  });
  return stdin;
}

module.exports = { setupInput };
