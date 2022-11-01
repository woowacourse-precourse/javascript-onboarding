function problem1(pobi, crong) {
  var answer;

  //예외 처리
  if (exceptCase(pobi) || exceptCase(crong)) {
    return -1
  }

  var pobiScore = Math.max(scoreCal(pobi[0]), scoreCal(pobi[1]));
  var crongScore = Math.max(scoreCal(crong[0]), scoreCal(crong[1]));

  if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else {
    return 0;
  }
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

function exceptCase(arr) {
  //첫 페이지나 마지막 페이지를 펼칠 경우
  if (arr.includes(0) || arr.includes(400)) {
    return true
  }

  //잘못된 입력이 들어올 경우 ex)[97, 102]
  if (arr[1] - arr[0] !== 1) {
    return true
  }
}

module.exports = problem1;
