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
  let maxNumA;
  let maxNumB;
  console.log(numArrA,numArrB);
  return maxNumA==maxNumB?0:maxNumA>maxNumB?1:2; 
}

module.exports = problem1;