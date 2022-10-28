function slicePage(nowPageNum){
  const pageString = String(nowPageNum);
  let pageSliceArray = [0, 0, 0];
  let prePageNum = nowPageNum;

  for(let i = length.pageString - 1; i > -1 ; i--){
    pageSliceArray[i] = Number(prePageNum) / (10 ** i);
    prePageNum = prePageNum % (10 ** i);
  }

  return pageSliceArray;
}

function calPlusMinus(pageSliceArray){
  let pageCalArray = [0, 0];
  let sumResult = 0;
  let multiplicationResult = 1;

  for(let i = 0; i < pageSliceArray.length; i++){
    nowArrayValue = pageSliceArray[i];
    sumReault += nowArrayValue;
    multiplicationResult *= nowArrayValue;
  }
  
  pageCalArray = [sumResult, multiplicationResult];
  return pageCalArray;
}

function findReault(maxNumArray) {
}

function problem1(pobi, crong) {
  let animal = [...pobi, ...crong];
  let pageSliceArray = [0, 0, 0];
  let pageCalArray = [0, 0];

  animal.forEach((element) => {
    pageSliceArray = slicePage(maxNumArray[i]);
    pageCalArray = calPlusMinus(pageSliceArray);
    });     
  }
  
  var answer;
  answer = findReault(maxNumArray);
  return answer;  
  }

console.log(problem1([97, 98], [197, 198]));

module.exports = problem1;
