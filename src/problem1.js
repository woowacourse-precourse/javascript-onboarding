function problem1(pobi, crong) {
  var answer;

  var pobiScore = Math.max(scoreCal(pobi[0]), scoreCal(pobi[1]));
  var crongScore = Math.max(scoreCal(crong[0]), scoreCal(crong[1]));
}

//점수 계산 함수
function scoreCal(n1) {
  var plusVal = 0;
  var multiVal = 1;

  for (var num of n1.toString()) {
    plusVal += parseInt(num);
    multiVal *= parseInt(num);
  }

  return Math.max(plusVal, multiVal);
}

module.exports = problem1;
