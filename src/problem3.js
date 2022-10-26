function problem3(number) {
  var answer = 0;
  for(let i = 1; i <= number; i++){
    answer += getClap(i);
  }
  return answer;
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
