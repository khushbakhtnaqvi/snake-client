const stdin = process.stdin;
let connection;
let timer;
let time = 150;
const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // your code here
  stdin.on('data', (key) => {
    //if (key === '\u0003') {
    //  process.exit();
    //}
    switch (key) {
      case '\u0003':
        process.exit();
        break;
      case '\u0077':
        clearInterval(timer);
        timer = setInterval(() => connection.write("Move: up"), time);
        break;
      case '\u0061':
        clearInterval(timer);
        timer = setInterval(() => connection.write("Move: left"), time);
        break;
      case '\u0073':
        clearInterval(timer);
        timer = setInterval(() => connection.write("Move: down"), time);        
        break;
      case '\u0064':
        clearInterval(timer);
        timer = setInterval(() => connection.write("Move: right"), time);
        break;
      }
  });
};

module.exports = {setupInput, stdin};