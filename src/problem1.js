function problem1(pobi, crong) {
  var answer;
  var pobi_max = 0;
  var crong_max = 0;
  if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]) {
    answer = -1;
  } else {
    for (var i = 0; i < 2; i++) {
      var pobi_tmp = pobi[i].toString().split("");
      var crong_tmp = crong[i].toString().split("");
      pobi_max = Math.max(
        pobi_max,
        pobi_tmp.reduce((prev, curr) => {
          return parseInt(prev) + parseInt(curr);
        }),
        pobi_tmp.reduce((prev, curr) => {
          return parseInt(prev) * parseInt(curr);
        })
      );
      crong_max = Math.max(
        crong_max,
        crong_tmp.reduce((prev, curr) => {
          return parseInt(prev) + parseInt(curr);
        }),
        crong_tmp.reduce((prev, curr) => {
          return parseInt(prev) * parseInt(curr);
        })
      );
    }
    if (pobi_max > crong_max) {
      answer = 1;
    } else if (pobi_max < crong_max) {
      answer = 2;
    } else {
      answer = 0;
    }
  }
  return answer;
}

module.exports = problem1;
