const calcSum = (num) => {
  let sum = 0;
  while (num > 0){
    sum += Math.trunc(num % 10);
    num = Math.trunc(num / 10);
  }
  return sum;
}

function problem1(pobi, crong) {
  return answer;
}

module.exports = problem1;
