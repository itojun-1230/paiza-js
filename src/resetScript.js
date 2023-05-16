const SplitNumber = ( num ) => {    //引数を" "で分割してNumberにして返す
    
    return num.split(" ").map(Number);
}

const Main = ( input ) => {


}

Main( require("fs").readFileSync("main/input.txt", "utf8").split("\n") );