const SplitNumber = (num) => {    //引数を" "で分割してNumberにして返す

  return num.split(" ").map(Number);
}
const DeepCopy = (e) => {    //引数をDeepCopyして返す

  return JSON.parse(JSON.stringify(e));
}
const QuickSort = (arr, sort = 0) => {  //数列をクイックソートする 昇順 sort = 0 降順 sort = 1
  if (arr.length <= 1) {
    return arr;
  }
  let Pivot = arr[Math.floor(Math.random() * arr.length)];
  const Left = [], Mid = [], Right = [];

  for (let i = 0; i < arr.length; i++) {
    if (sort == 0 ? arr[i] < Pivot : arr[i] > Pivot) {
      Left.push(arr[i]);
    } else if (sort == 0 ? arr[i] > Pivot : arr[i] < Pivot) {
      Right.push(arr[i]);
    } else {
      Mid.push(arr[i]);
    }
  }

  return [...QuickSort(Left, sort), ...Mid, ...QuickSort(Right, sort)];
}
const BinarySearch = (arr, data) => { //引数arrのdataのindexを返す二分探索関数 見つからなかった場合-1を返す
  let max = arr.length;
  let min = 0;

  let res = -1;
  while (max >= min) {
    const Mid = Math.floor((max + min) / 2);

    if (arr[Mid] < data) {

      min = Mid + 1;
    } else if (arr[Mid] > data) {

      max = Mid - 1;
    } else if (arr[Mid] == data) {
      res = Mid;
      break;
    }
  }
  return res;
}

const Main = (input) => {


}

Main(require("fs").readFileSync("main/input.txt", "utf8").split("\n"));