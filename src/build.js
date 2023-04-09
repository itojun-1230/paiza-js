import fs from 'fs';

const ScriptText = fs.readFileSync('main/script.js', 'utf-8').split("\n");

const OutputText = 
`const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
reader.on('line', (line) => {
  input.push(line);
});
reader.on('close', () => {
  ${ScriptText.slice(2, ScriptText.length).join("\n  ")}
});`;

fs.writeFileSync('main/output.js',  OutputText);

console.log("output.jsに出力しました");