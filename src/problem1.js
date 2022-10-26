function problem1(pobi, crong) {
  if(validationArr(pobi) && validationArr(crong)){
    return pageGameApp(pobi,crong);
  }
  return -1;
}

function validationArr(arr){
  return arr[1]-arr[0] == 1?true:false;
}

function pageGameApp(numArr1,numArr2){
  let maxNumberA = maxValueCalculator(numArr1);
  let maxNumberB = maxValueCalculator(numArr2);
  return maxNumberA==maxNumberB?0:maxNumberA>maxNumberB?1:2;
}

function maxValueCalculator(arr){  
  return Math.max(sumEachLetter(arr[0]),sumEachLetter(arr[1]),mulEachLetter(arr[0]),mulEachLetter(arr[1]));
}

function sumEachLetter(n){
  let sum = 0;
  while(n>0) {
    sum += n%10;
    n = parseInt(n/10);
  }
  return sum;
}

function mulEachLetter(n){
  let mul = 1;
  while(n>0){
    mul *= n%10;
    n = parseInt(n/10);
  }
  return mul;
}

module.exports = problem1;