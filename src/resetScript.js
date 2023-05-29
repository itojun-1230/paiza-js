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
const BinarySearch = ( arr, data ) => { //引数arrのdataのindexを返す二分探索関数 見つからなかった場合-1を返す
    let max = arr.length;
    let min = 0;

    let res = -1;
    while(max >= min) {
        const Mid = Math.floor(( max + min ) / 2);

        if( arr[Mid] < data ) {

            min = Mid + 1;
        }else if(arr[Mid] > data) {

            max = Mid - 1;
        }else if(arr[Mid] == data){
            res = Mid;
            break;
        }
    }
    return res;
}

const Main = ( input ) => {


}

Main( require("fs").readFileSync("main/input.txt", "utf8").split("\n") );