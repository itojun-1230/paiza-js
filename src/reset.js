const fs = require("fs");

//resetScript.jsのテキストをscript.jsに上書きする
fs.writeFileSync('main/script.js',  fs.readFileSync("src/resetScript.js", "utf8"));
//input.txtをまっさらに
fs.writeFileSync('main/input.txt', '');

try {
    //output.jsを削除
    fs.unlinkSync('main/output.js');
} catch {
    /*なにもしない*/
}

console.log("初期化しました");