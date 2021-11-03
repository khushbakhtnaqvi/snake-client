const net = require("net");

// establishes a connection with the game server
const connect = function (connection) {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write("Name: KBZ");
  });

  conn.on("end", () => {
    // code that does something when the connection is disconnected
    console.log("you ded cuz you idled");
  });
  return conn;
};

module.exports = {connect};