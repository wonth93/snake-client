const net = require("net");
const { IP, PORT, message } = require("./constants");

// establishes a connection with the gamer sever
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as test
  conn.setEncoding("utf8");

  // receiving message from server
  conn.on("data", (messageFromServer) => {
    console.log("Server said:", messageFromServer);
  });

  // Print a message when connection is successfully established & sending name to the server
  conn.on("connect", () => {
    console.log(message["connectionSuccessful"]);
    conn.write("Name: MTW");
  });

  return conn;
};

module.exports = { connect };