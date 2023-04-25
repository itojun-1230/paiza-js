import fs from 'fs';

const OutputText = 
`import fs from 'fs';
let input = fs.readFileSync('main/input.txt', 'utf-8').split("\\n");

`;

fs.writeFileSync('main/script.js',  OutputText);
fs.writeFileSync('main/input.txt',  '');
try {
fs.unlinkSync('main/output.js');
} catch {}

console.log("初期化しました");