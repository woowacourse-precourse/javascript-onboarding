function restrictions(pobi, crong) {
  if (pobi.length != 2 || crong.length != 2) return -1;
  else if (pobi[1] != pobi[0] + 1 || crong[1] != crong[0] + 1) return -1;
  else return 0;
}

function problem1(pobi, crong) {
  var answer;
  var pobi_max;
  var crong_max;
  var pobi_ary = [];
  var crong_ary = [];
  var check = restrictions(pobi, crong);

  if (check == -1) {
    answer = -1;
    return answer;
  } else {
    pobi_left = String(pobi[0]);
    pobi_right = String(pobi[1]);
    crong_left = String(crong[0]);
    crong_right = String(crong[1]);

    var sum = 0;
    var mul = 1;
    for (var i = 0; i < pobi_left.length; i++) {
      sum += parseInt(pobi_left[i]);
      mul *= parseInt(pobi_left[i]);
    }
    pobi_ary.push(sum, mul);
    sum = 0;
    mul = 1;
    for (var i = 0; i < pobi_right.length; i++) {
      sum += parseInt(pobi_right[i]);
      mul *= parseInt(pobi_right[i]);
    }
    pobi_ary.push(sum, mul);
    sum = 0;
    mul = 1;
    for (var i = 0; i < crong_left.length; i++) {
      sum += parseInt(crong_left[i]);
      mul *= parseInt(crong_left[i]);
    }
    crong_ary.push(sum, mul);
    sum = 0;
    mul = 1;
    for (var i = 0; i < crong_right.length; i++) {
      sum += parseInt(crong_right[i]);
      mul *= parseInt(crong_right[i]);
    }
    crong_ary.push(sum, mul);

    pobi_max = Math.max(...pobi_ary);
    crong_max = Math.max(...crong_ary);

    if (pobi_max == crong_max) answer = 0;
    else if (pobi_max > crong_max) answer = 1;
    else if (pobi_max < crong_max) answer = 2;

    return answer;
  }
}

module.exports = problem1;
