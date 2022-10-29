function problem1(pobi, crong) {
  var answer;
  var pobi_left = pobi[0]
    .toString()
    .split('')
    .map((x) => parseInt(x));
  var pobi_right = pobi[1]
    .toString()
    .split('')
    .map((x) => parseInt(x));

  var pobi_left_sum = pobi_left.reduce((acc, cur) => acc + cur);
  var pobi_right_sum = pobi_right.reduce((acc, cur) => acc + cur);

  var pobi_left_mul = pobi_left.reduce((acc, cur) => acc * cur);
  var pobi_right_mul = pobi_right.reduce((acc, cur) => acc * cur);

  var pobi_max = Math.max(
    pobi_left_sum,
    pobi_right_sum,
    pobi_left_mul,
    pobi_right_mul
  );

  var crong_left = crong[0]
    .toString()
    .split('')
    .map((x) => parseInt(x));
  var crong_right = crong[1]
    .toString()
    .split('')
    .map((x) => parseInt(x));

  var crong_left_sum = crong_left.reduce((acc, cur) => acc + cur);
  var crong_right_sum = crong_right.reduce((acc, cur) => acc + cur);

  var crong_left_mul = crong_left.reduce((acc, cur) => acc * cur);
  var crong_right_mul = crong_right.reduce((acc, cur) => acc * cur);

  var crong_max = Math.max(
    crong_left_sum,
    crong_right_sum,
    crong_left_mul,
    crong_right_mul
  );

  if (pobi[0] != pobi[1] - 1 || crong[0] != crong[1] - 1) {
    answer = -1;
  } else if (
    pobi[0] < 1 ||
    pobi[1] < 1 ||
    crong[0] < 1 ||
    crong[1] < 1 ||
    pobi[0] > 400 ||
    pobi[1] > 400 ||
    crong[0] > 400 ||
    crong[1] > 400
  ) {
    answer = -1;
  } else if (pobi_max === crong_max) {
    answer = 0;
  } else if (pobi_max > crong_max) {
    answer = 1;
  } else if (pobi_max < crong_max) {
    answer = 2;
  }
  return answer;
}

module.exports = problem1;
