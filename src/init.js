import fs from 'fs';

const OutputText = 
`import fs from 'fs';
let input = fs.readFileSync('main/input.txt', 'utf-8').split("\\n");

`;

fs.writeFileSync('main/script.js',  OutputText);
fs.writeFileSync('main/input.txt',  '');
fs.unlinkSync('main/output.js');

console.log("初期化しました");