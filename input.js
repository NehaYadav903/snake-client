let connection;// // stores the active TCP connectiong object
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => { // on data input/key being pushed, call handleUserInput with the key being pushed
    handleUserInput(key);
  });
  return stdin;
};
//setupInput(); // calling function
const handleUserInput = (key) => { // once called by key, execute this block
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    console.log('exiting now...');
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === '1') {
    connection.write('Say: GO!');
  }

  if (key === '2') {
    connection.write('Say: BACK');
  }

  if (key === '3') {
    connection.write('Say: RIGHT');
  }

  if (key === '4') {
    connection.write('Say: WIN!');
  }

  if (key === '5') {
    connection.write('Say: LOOSE IT');
  }

  if (key === '6') {
    connection.write('Say: GOOD ATTEMPT');
  }
};
module.exports = { setupInput };
