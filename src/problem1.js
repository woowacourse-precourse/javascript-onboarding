function slicePage(pageNum){
  let pageString = String(pageNum);
  let leftPageNum = Number(pageString[0]);
  let rightPageNum = Number(pageString[1]);
  
  return calPlusMinus(leftPageNum, rightPageNum);
}

function calPlusMinus(leftPageNum, rightPageNum){
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
  let animal = [pobi, crong];
  let maxNumArray = [0, 0];
  for(i = 0; i < 2; i++){
    animal[i].forEach((element) => {
      maxNumArray[i] = Math.max(maxNumArray[i], slicePage(element));
    });     
  }
  
  var answer;
  answer = findReault(maxNumArray);
  return answer;  
  }

console.log(problem1([97, 98], [197, 198]));

module.exports = problem1;
