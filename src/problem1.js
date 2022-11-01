function problem1(pobi, crong) {

  //예외처리
  const checkPage = (arr) => {
    if(arr[0] + 1 !== arr[1]) return false;
    if(arr.length !== 2) return false;
    if(arr[0] <= 1 || arr[1] >= 400) return false;
    if(arr[0] % 2 === 0 || arr[1] % 2 === 1) return false;
    return true;
  }

  //최대값 구하기
  const checkMax = (page) => {
    let arrLeft = page[0];
    let arrRight = page[1];
    
    let leftArr = arrLeft.toString().split("").map((i) => Number(i));
    let rightArr = arrRight.toString().split("").map((i) => Number(i));

    let sumLeft = leftArr.reduce((acc,cur,idx) => {return acc += cur}, 0);
    let sumRight = rightArr.reduce((acc,cur) => {return acc += cur}, 0);

    let mulLeft = leftArr.reduce((acc, cur) => {return acc *= cur}, 1);
    let mulRight = rightArr.reduce((acc, cur) => {return acc *= cur}, 1);

    let sumMax = Math.max(sumLeft, sumRight);
    let mulMax = Math.max(mulLeft, mulRight);

    let maxValue = Math.max(sumMax, mulMax);

    return maxValue;
  }

  if(!checkPage(pobi) || !checkPage(crong)) {
    return -1;
  }

  const pobiMax = checkMax(pobi);
  const crongMax = checkMax(crong);

  if(pobiMax > crongMax){
    return 1;
  } else if(pobiMax < crongMax){
    return 2;
  } else if(pobiMax === crongMax){
    return 0;
  } else {
    return -1;
  }
}

module.exports = problem1;