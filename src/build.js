const fs = require("fs");

const ScriptText = fs.readFileSync('main/script.js', 'utf-8').replace("main/input.txt","/dev/stdin");

fs.writeFileSync('main/output.js',  ScriptText);

console.log("output.jsに出力しました");