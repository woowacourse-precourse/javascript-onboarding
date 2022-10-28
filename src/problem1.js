function problem1(pobi, crong) {
  let answer;
  if (isError(pobi) || isError(crong)) answer = -1;
  else if (maxNum(pobi) > maxNum(crong)) answer= 1;
  else if (maxNum(pobi) < maxNum(crong)) answer= 2;
  else if (maxNum(pobi) === maxNum(crong)) answer= 0;
  return answer;
}

function maxNum(array){
  let maxNum;
  const leftPage = array[0].toString().split(''); 
  const rightPage = array[1].toString().split(''); 
  let addLeftNum = 0;
  let multipleLeftNum = 1;
  let addRightNum = 0;
  let multipleRightNum = 1;
  for (i=0; i<leftPage.length ; i++){  
    addLeftNum += parseInt(leftPage[i]);
    multipleLeftNum *= parseInt(leftPage[i]);
  }
  for (i=0; i<rightPage.length ; i++){  
    addRightNum += parseInt(rightPage[i]);
    multipleRightNum *= parseInt(rightPage[i]);
  }
  maxNum = Math.max(addLeftNum, addRightNum, multipleLeftNum, multipleRightNum)
  return maxNum;
}

function isError(array){
  let isError = false;
  if (array[1]<=2 || array[1] >= 399) isError = true;
  else if (array.length !== 2) isError = true;
  else if (array[0] % 2 !== 1 || array[1] % 2 !== 0) isError = true;
  else if (array[1] - array[0] !== 1) isError = true;
  return isError;
}
module.exports = problem1;
