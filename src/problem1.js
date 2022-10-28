function slicePage(nowPageNum){
  let pageSliceArray = [0, 0, 0];
  let pageString = String(nowPageNum);
  let prePageNum = nowPageNum;

  for(let i = length.pageString - 1; i > -1 ; i--){
    pageSliceArray[i] = Number(prePageNum) / (10 ** i);
    prePageNum = prePageNum % (10 ** i);
  }
  
  return pageSliceArray;
}

function calPlusMinus(pageSliceArray){
  let maxNum = Math.max(leftPageNum + rightPageNum, leftPageNum * rightPageNum);
  return maxNum;
}

function findReault(maxNumArray) {
  let result = -1;
  let pobiNum = maxNumArray[0]
  let crongNum = maxNumArray[1];
  
  if (pobiNum > crongNum){
    result = 1;
  }
  else if(pobiNum < crongNum) {
    result = 2;
  }
  else {
    result = 0;
  }

  return result;
}

function problem1(pobi, crong) {
  let animal = [...pobi, ...crong];
  let maxNumArray = [0, 0, 0, 0];
  
  animal.forEach((element) => {
      maxNumArray[i] = ;
    });     
  }
  
  var answer;
  answer = findReault(maxNumArray);
  return answer;  
  }

console.log(problem1([97, 98], [197, 198]));

module.exports = problem1;
