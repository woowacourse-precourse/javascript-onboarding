function problem1(pobi, crong) {
  //예외사항: 페이지가 연속되지 않을 경우 -> 1. 앞페이지 >= 뒷페이지, 뒷페이지 - 앞페이지 !== 1 | 숫자 값이 아닌 경우 | 배열 길이가 2가 아님
  function checkExceptions(arr){
    if ((arr[0] >= arr[1]) || (arr[1] - arr[0] !== 1) || (Number.isNaN(arr[0]) || Number.isNaN(arr[1])) || arr.length !== 2) return true;
    return false;
  }
  if (checkExceptions(pobi) || checkExceptions(crong)) return -1;

  function findBiggest(arr) {
    let biggest = 0;
    const numToString = arr.map(x => x.toString().split(''))
    for (let numbers of numToString) {
      const stringToNum = numbers.map(x => parseInt(x))
      const summation = stringToNum.reduce((prevValue, currValue) => prevValue + currValue);
      const multiplication = stringToNum.reduce((prevValue, currValue) => prevValue * currValue);
      biggest = Math.max(summation, multiplication);
    }
    return biggest;
  }

  if (findBiggest(pobi) > findBiggest(crong)){
    return 1;
  }else if (findBiggest(pobi) < findBiggest(crong)){
    return 2
  }else{
    return 0;
  }

}

module.exports = problem1;
