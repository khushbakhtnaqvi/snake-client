const net = require("net");
const { IP, PORT, name } = require("./constants");

// establishes a connection with the game server
const connect = function (connection) {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write(name);
  });

  conn.on("data", (data) => {
    // code that does something when the connection is disconnected
    console.log(data);
  });
  conn.on("error", () => {
    // code that does something when the connection is disconnected
    console.log("---------------- GAME ENDED ----------------");
    process.exit();
  });
  return conn;
};

module.exports = {connect};