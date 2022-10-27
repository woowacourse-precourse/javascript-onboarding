function problem1(pobi, crong) {
  if(!handleExcept(pobi, crong)){
    return -1;
  }
  var answer;
  let pobiMaxNum, crongMaxNum;
  pobiMaxNum = getMaxNum(pobi);
  crongMaxNum = getMaxNum(crong);
  answer = getResult(pobiMaxNum, crongMaxNum);
  return answer;
}

function handleExcept(pobi, crong){
  if((pobi[0] % 2 == 0) || (crong[0] % 2 == 0) || (pobi[1] % 2 == 1) || (crong[1] % 2 == 1)){
    return false;
  }
  if(((pobi[0] + 1 != pobi[1])) || ((crong[0] + 1) != crong[1])){
    return false;
  }
  if(!((Number.isInteger(pobi[0])) && (Number.isInteger(pobi[1])) && (Number.isInteger(crong[0])) && (Number.isInteger(crong[1])))){
    return false;
  }
  if((pobi[0] < 1 || pobi[0] > 399) || (pobi[1] < 2 || pobi[1] > 400) || (crong[0] < 1 || crong[1] > 399) || (crong[1] < 2 || crong[1] > 400)){
    return false;
  }
  return true;
}

function getMaxNum(player){
  let sum, mul;
  sum = getMaxSum(player[0], player[1]);
  mul = getMaxMul(player[0], player[1]);
  if(sum < mul){
    return mul;
  }
  return sum;
}

function getMaxSum(left, right){
  let leftSum = 0, rightSum = 0;
  leftSum = getSum(left);
  rightSum = getSum(right);
  if(leftSum > rightSum){
    return leftSum;
  }
  else{
    return rightSum;
  }
}

function getMaxMul(left, right){
  let leftMul = 1, rightMul = 1;
  leftMul = getMul(left);
  rightMul = getMul(right);
  if(leftMul > rightMul){
    return leftMul;
  }
  else{
    return rightMul;
  }
}

function getSum(num){
  let number = num, divider = 100, sum = 0;
  for(let i = 0; i < 3; i++){
    sum += parseInt(number / divider);
    number %= divider;
    divider /= 10;
  }
  return sum;
}

function getMul(num){
  let number = num, divider = 100, mul = 1;
  for(let i = 0; i < 3; i++){
    if(parseInt(number / divider) == 0){
      mul *= 1;
    }
    else{
      mul *= parseInt(number / divider);
    }
    number %= divider;
    divider /= 10;
  }
  return mul;
}

function getResult(pobiNum, crongNum){
  if(pobiNum > crongNum){
    return(1);
  }
  else if(pobiNum < crongNum){
    return(2);
  }
  else{
    return(0);
  }
}

module.exports = problem1;
