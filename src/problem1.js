function calculMaxNum(arr) {
  let result = [];

  arr.forEach((number) => {
    add_sum = 0;
    multi_sum = 1;
    [...number.toString()].forEach((n) => {
      add_sum += Number(n);
      multi_sum *= Number(n);
    });

    result.push(add_sum);
    result.push(multi_sum);
  });

  return Math.max(...result);
}

function problem1(pobi, crong) {
  var answer;

  p = calculMaxNum(pobi);
  c = calculMaxNum(crong);
  if (p > c) {
    answer = 1;
  } else if (p < c) {
    answer = 2;
  } else {
    answer = 0;
  }

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
