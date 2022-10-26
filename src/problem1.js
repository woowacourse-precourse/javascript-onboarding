const calcSum = (num) => {
  let sum = 0;
  while (num > 0){
    sum += Math.trunc(num % 10);
    num = Math.trunc(num / 10);
  }
  return sum;
}

const calcProduct = (num) => {
  let product = 1;
  while (num > 0){
    product *= Math.trunc(num % 10);
    num = Math.trunc(num / 10);
  }
  return product;
}

function problem1(pobi, crong) {
  return answer;
}

module.exports = problem1;
