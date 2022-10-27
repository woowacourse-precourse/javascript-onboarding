function problem3(number) {
  var answer;
  answer = getSum(number);
  return answer;
}

function getSum(num){
  let sum = 0;
  for(let i = 1; i <= num; i++){
    sum += getClap(i);
  }
  return sum;
}

function getClap(i){
  let num = i, divider = 10000, sumOfClaps = 0;
  while(num != 0){
    let digit = parseInt(num / divider);
    if((digit == 3) || (digit == 6) || (digit == 9)){
      sumOfClaps++;
    }
    num %= divider;
    divider /= 10;
  }
  return sumOfClaps;
}

module.exports = problem3;
