import fs from 'fs';

const OutputText = 
`import fs from "fs";
const Input = fs.readFileSync("main/Input.txt", "utf8").trim().split("\\n");
`;

fs.writeFileSync('main/script.js',  OutputText);
fs.writeFileSync('main/input.txt',  '');
try {
fs.unlinkSync('main/output.js');
} catch {}

console.log("初期化しました");