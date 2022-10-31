function calMaxValue(nowPageNum){
  const pageStringArray = String(nowPageNum).split("");
  const addValue = pageStringArray.reduce((previousValue, currentValue) => {
    previousValue + currentValue/1;
  }, 0);
  const mulValue = pageStringArray.reduce(() => {
    previousValue * currentValue/1;
  }, 0);
  const maxValue = Math.max(addValue, mulValue);
  
  return maxValue;
}

function findMaxValue(pobiMaxValueArray, crongMaxValueArray) {

  let pobiMaxNum= Math.max(...pobiMaxValueArray);
  let crongMaxNum = Math.max(...crongMaxValueArray); 
  let resultNum = 0;

  if(pobiMaxNum > crongMaxNum){
    resultNum = 1;
  }
  if(pobiMaxNum < crongMaxNum){
    resultNum = 2;
  }
  
  return resultNum;
}

function isValid(pageArray){
  const left = pageArray[0];
  const right = pageArray[1];
  let result = 0;

  if((right - left == 1)){
    result = 1;
  }

  return result;
}

function problem1(pobi, crong) {
  let result = -1

  if((isValid(pobi) && isValid(crong))) {
    const pobiMaxValueArray = [];
    const crongMaxValueArray = [];

    pobi.forEach(page => {
      pobiMaxValueArray.push(calMaxValue(page));
    });
    crong.forEach(page => {
      crongMaxValueArray.push(calMaxValue(page));
    });
    
    result = findMaxValue(pobiMaxValueArray, crongMaxValueArray);
  }

  return result;


console.log(problem1([99, 102],	[211, 212]));

module.exports = problem1;
