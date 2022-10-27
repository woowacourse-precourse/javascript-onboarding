console.log(problem1([97, 98],[197, 198]));

function problem1(pobi, crong) {
  if(validationArr(pobi) && validationArr(crong)){  
    return pageGameApp(pobi, crong);  // 두 값이 같으면 0, A가 크면 1, B가 크면 2
  }
  return -1;
}

function validationArr(arr){
  return arr.length!=2?false:arr[1]-arr[0] == 1?true:false;
}

function pageGameApp(numArrA,numArrB){
  console.log(splitNumber(numArrA[0]));
  let maxNumA;
  let maxNumB;
  return maxNumA==maxNumB?0:maxNumA>maxNumB?1:2; 
}

function splitNumber(n){
  const splitArr=[];
  while(n>0) {
    splitArr.unshift(n%10);
    n = parseInt(n/10);
  }
  return splitArr;
}

module.exports = problem1;