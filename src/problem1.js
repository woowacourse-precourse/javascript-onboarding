function slicePage(nowPageNum){
  const pageString = String(nowPageNum);
  let pageSliceArray = [-1, -1, -1];
  let prePageNum = Number(nowPageNum);

  for(let i = pageString.length - 1; i > -1 ; i--){
    pageSliceArray[i] = parseInt(prePageNum / (10 ** i));
    prePageNum = prePageNum % (10 ** i);
  }
  return pageSliceArray;
}

function calPlusMinus(pageSliceArray){
  let pageCalArray = [-1, -1];
  let sumResult = 0;
  let multiplicationResult = 1;

  for(let i = 0; i < pageSliceArray.length; i++){
    nowArrayValue = pageSliceArray[i];
    if (nowArrayValue == -1) continue;
    sumResult += nowArrayValue;
    multiplicationResult *= nowArrayValue;
  }
  
  pageCalArray = [sumResult, multiplicationResult];
  return pageCalArray;
}

function findReault(numArray) {
  let resultNum = -1;

  let pobiMaxNum= Math.max(...numArray.slice(0, 4));
  let crongMaxNum = Math.max(...numArray.slice(4)); 

  if(pobiMaxNum == crongMaxNum){
    resultNum = 0;
  }
  else if(pobiMaxNum > crongMaxNum){
    resultNum = 1;
  }
  else {
    resultNum = 2;
  }

  return resultNum;
}

function isValid(pageArray){
  let pobiLeft = pageArray[0];
  let pobiRight = pageArray[1];
  let crongLeft = pageArray[2];
  let crongRight = pageArray[3];
  let result = 0;

  if((pobiLeft + 1 == pobiRight) && (crongLeft + 1 == crongRight)){
    result = 1;
  }

  return result;
}

function problem1(pobi, crong) {
  const pageArray = [...pobi, ...crong];
  let numArray = [];
  let resultNum = -1;

  if (isValid(pageArray)) {
    pageArray.forEach((page) => {
    let pageSliceArray = slicePage(page);
    let pageCalArray = calPlusMinus(pageSliceArray);
    numArray = [...numArray, ...pageCalArray]
    });    
    resultNum = findReault(numArray);
  }
  return resultNum;  
}
console.log(problem1([99, 102],	[211, 212]));

module.exports = problem1;
