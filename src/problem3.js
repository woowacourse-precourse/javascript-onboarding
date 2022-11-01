const getDigits = (num) => {
  const digits = [];
  while(num !== 0){
    digits.push(num%10);
    num = Math.floor(num / 10);
  }

  return digits;
}

const clapCount = (num) => {
  const clapDigits = [3,6,9];
  const digits = getDigits(num);
  let count = 0;
  for(let i = 0; i < digits.length; i++){
    if(clapDigits.includes(digits[i])) count++;
  }

  return count;
}

function problem3(number) {
  var answer = 0;

  for(let i = 1; i < number + 1; i++){
    answer += clapCount(i);
  }

  return answer;
}

module.exports = problem3;
