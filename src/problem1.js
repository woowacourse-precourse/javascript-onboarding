function eachSum(num) {
  let sum = 0;

  do {
    sum += num % 10;
    num = Math.floor(num / 10);
  } while (num > 0)

  return sum
}

function eachMulti(num) {
  let mul = String(String(num).split('').reduce(function (a, b) { return a * b }));

  return parseInt(mul)
}

function problem1(pobi, crong) {
  let pobiList = [eachSum(pobi[0]), eachMulti(pobi[0]), eachSum(pobi[1]), eachMulti(pobi[1])];
  let pobiScore = Math.max(...pobiList);

  let crongList = [eachSum(crong[0]), eachMulti(crong[0]), eachSum(crong[1]), eachMulti(crong[1])];
  let crongScore = Math.max(...crongList);

  console.log(pobiScore, crongScore);

  return answer;
}

module.exports = problem1;