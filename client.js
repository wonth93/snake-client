const net = require("net");

// establishes a connection with the gamer sever
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as test
  conn.setEncoding("utf8");
  // receiving message from server
  conn.on("data", (messageFromServer) => {
    console.log("Server said:", messageFromServer);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };