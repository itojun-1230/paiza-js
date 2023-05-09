const fs = require("fs");

const OutputText = 
`const Input = require("fs").readFileSync("main/input.txt", "utf8").trim().split("\n");

`;

fs.writeFileSync('main/script.js',  OutputText);
fs.writeFileSync('main/input.txt',  '');
try {
fs.unlinkSync('main/output.js');
} catch {}

console.log("初期化しました");