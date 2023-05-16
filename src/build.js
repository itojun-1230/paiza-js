const fs = require("fs");

//"main/input.txt" -> "/dev/stdin"
const ScriptText = fs.readFileSync('main/script.js', 'utf-8').replace("main/input.txt","/dev/stdin");

fs.writeFileSync('main/output.js',  ScriptText);    //output.jsを生成し書き込み

console.log("output.jsに出力しました");