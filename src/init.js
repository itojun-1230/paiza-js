import fs from 'fs';

const OutputText = 
`import fs from 'fs';
let input = fs.readFileSync('main/input.txt', 'utf-8').split("\\n");

`;

fs.writeFileSync('main/script.js',  OutputText);

console.log("初期化しました");