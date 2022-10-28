function calc(num) {
  var max;
  var num_add = 0;
  var num_mul = 1;
  while (num !== 0) {
    num_add += num % 10;
    num_mul *= num % 10;

    num = Math.floor(num / 10);
  }
  max = num_add > num_mul ? num_add : num_mul;

  return max;
}

function problem1(pobi, crong) {
  var answer;

  var pobi_max;
  var crong_max;

  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) {
    return -1;
  }
  if (pobi[0] % 2 !== 1 || crong[0] % 2 !== 1) {
    return -1;
  }

  pobi_max = calc(pobi[0]) > calc(pobi[1]) ? calc(pobi[0]) : calc(pobi[1]);
  crong_max = calc(crong[0]) > calc(crong[1]) ? calc(crong[0]) : calc(crong[1]);

  if (pobi_max > crong_max) {
    answer = 1;
  } else if (pobi_max < crong_max) {
    answer = 2;
  } else {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
