const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
reader.on('line', (line) => {
  input.push(line);
});
reader.on('close', () => {
  //処理

});