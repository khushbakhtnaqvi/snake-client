const {time, keys} = require("./constants")
const stdin = process.stdin;
let connection;
let timer;
const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
    switch (key) {
      case '\u0003':
        process.exit();
        break;
      case '\u0077':
        clearInterval(timer);
        timer = setInterval(() => connection.write(keys.w), time);
        break;
      case '\u0061':
        clearInterval(timer);
        timer = setInterval(() => connection.write(keys.a), time);
        break;
      case '\u0073':
        clearInterval(timer);
        timer = setInterval(() => connection.write(keys.s), time);        
        break;
      case '\u0064':
        clearInterval(timer);
        timer = setInterval(() => connection.write(keys.d), time);
        break;
      }
};

module.exports = {setupInput, stdin};