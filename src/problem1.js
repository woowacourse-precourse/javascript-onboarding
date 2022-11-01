function problem1(pobi, crong) {
  var answer = true;
  // 다를 떄 반환
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) return -1;
  pobi = max_num(pobi);
  crong = max_num(crong);
  if (pobi > crong) return 1;
  else return 0;
}

function max_num(arr) {
  var res = [];
  for (item of arr) {
    var temp = item
      .toString()
      .split("")
      .map((item) => Number(item));
    res.push(add_arr(temp), multi_arr(temp));
  }
  return Math.max.apply(null, res);
}

function add_arr(arr) {
  var sum = 0;
  for (item of arr) {
    sum += item;
  }
  return sum;
}

function multi_arr(arr) {
  var mult = 1;
  for (item of arr) {
    mult *= item;
  }
  return mult;
}

module.exports = problem1;