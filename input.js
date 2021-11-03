const stdin = process.stdin;
const setupInput = function () {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // your code here
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};

module.exports = {setupInput};