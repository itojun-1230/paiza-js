const SplitNumber = ( num ) => {    //引数を" "で分割してNumberにして返す
    
    return num.split(" ").map(Number);
}
const DeepCopy = ( e ) => {    //引数をDeepCopyして返す
    
    return JSON.parse(JSON.stringify(e));
}

const Main = ( input ) => {


}

Main( require("fs").readFileSync("main/input.txt", "utf8").split("\n") );