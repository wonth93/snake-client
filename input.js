// stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (input) {
  // movement
  if (input === 'w') {
    connection.write("Move: up");
  }
  if (input === 'a') {
    connection.write("Move: left");
  }
  if (input === 's') {
    connection.write("Move: down");
  }
  if (input === 'd') {
    connection.write("Move: right");
  }
  // \u0003 maps to ctrl+c input
  if (input === '\u0003') {
    process.exit();
  }
  // player message
  if (input === 'p') {
    connection.write("Say: Good Game!");
  }
  if (input === 'o') {
    connection.write("Say: Watch Out!");
  }
  if (input === 'i') {
    connection.write("Say: Nice move!");
  }
  if (input === 'u') {
    connection.write("Say: Lol");
  }
};

module.exports = { setupInput };