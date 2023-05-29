const SplitNumber = ( num ) => {    //引数を" "で分割してNumberにして返す
    
    return num.split(" ").map(Number);
}
const DeepCopy = ( e ) => {    //引数をDeepCopyして返す
    
    return JSON.parse(JSON.stringify(e));
}
const ShellSort = (arr, sort = true) => {  //数列をシェルソートする sort = true 昇順 sort = false 降順
    const Arr = DeepCopy(arr);  //DeepCopy
    
    let h = 0;
    while( h <= Arr.length / 9 ) {  //間隔計算
        h = 3 * h + 1;
    }
    while(h > 0){
        for(let i = h; i < Arr.length; i++){
            const tmp = Arr[i];
            
            let index = i - h;
            while(index >= 0 && sort ? Arr[index] > tmp : Arr[index] < tmp){
                Arr[index + h] = Arr[index];
                index -= h;
            }
            Arr[index + h] = tmp;
        }

        h = Math.floor(h / 3);
    }

    return Arr;
}

const Main = ( input ) => {


}

Main( require("fs").readFileSync("main/input.txt", "utf8").split("\n") );