function problem1(pobi, crong) {
  var answer = 0;
  var pobi_result = 0;
  var crong_result = 0;
  // * 왼쪽 페이지와 오른쪽 페이지가 1 차이 나는 지 확인
  const pageCheck = (bookpage) => {
    if (bookpage[0] !== bookpage[1] - 1) {
      return false;
    } else return true;
  };
  console.log(
    pageCheck(pobi) &&
      pageCheck(crong) &&
      pobi.length == 2 &&
      crong.length == 2 &&
      pobi[0] < pobi[1] &&
      crong[0] < crong[1]
  );

  // * 왼쪽 페이지 합,곱의 최대와 오른쪽 페이지 합, 곱의 최대를 비교 후 리턴
  const pageCalculator = (bookpage) => {
    var leftpage = bookpage[0].toString();
    var rightpage = bookpage[1].toString();
    var left_max = [0, 1];
    var right_max = [0, 1];

    for (var i = 0; i < leftpage.length; i++) {
      left_max[0] += Number(leftpage[i]);
      left_max[1] *= leftpage[i];
    }
    for (var i = 0; i < rightpage.length; i++) {
      right_max[0] += Number(rightpage[i]);
      right_max[1] *= rightpage[i];
    }
    return Math.max(left_max[0], left_max[1], right_max[0], right_max[1]);
  };

  if (
    pageCheck(pobi) &&
    pageCheck(crong) &&
    pobi.length == 2 &&
    crong.length == 2 &&
    pobi[0] < pobi[1] &&
    crong[0] < crong[1] &&
    pobi[0] !== 1 &&
    crong[0] !== 0 &&
    pobi[1] !== 400 &&
    crong[1] !== 400
  ) {
    pobi_result = pageCalculator(pobi);
    crong_result = pageCalculator(crong);

    // * 점수 비교
    if (pobi_result > crong_result) {
      answer = 1;
    } else if (pobi_result < crong_result) {
      answer = 2;
    } else if (pobi_result == crong_result) {
      answer = 0;
    } else {
      answer = -1;
    }
  } else answer = -1;

  return answer;
}

module.exports = problem1;
