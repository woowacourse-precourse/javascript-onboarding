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
  let maxNumA = maxValueCalculator([splitNumber(numArrA[0]),splitNumber(numArrA[1])]);
  let maxNumB = maxValueCalculator([splitNumber(numArrB[0]),splitNumber(numArrB[1])]);
  console.log(maxNumA);
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

function sumArr(arr){
  let totalSum = 0;
  for(let i=0; i<arr.length; i++){
    totalSum += arr[i];
  }
  return totalSum;
}

function mulArr(arr){
  let totalMul = 1;
  for(let i=0; i<arr.length; i++){
    totalMul *= arr[i];
  }
  return totalMul;
}

function maxValueCalculator(arr){
  return Math.max(sumArr(arr[0]),mulArr(arr[0]),sumArr(arr[1]),mulArr(arr[1]));
}

module.exports = problem1;