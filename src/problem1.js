function problem1(pobi, crong) {
  var answer;

  var pobiScore, crongScore;

  pobiScore = Math.max(
    add(pobi[0]),
    multiple(pobi[0]),
    add(pobi[1]),
    multiple(pobi[1])
  );
  crongScore = Math.max(
    add(crong[0]),
    multiple(crong[0]),
    add(crong[1]),
    multiple(crong[1])
  );

  if (pobiScore == crongScore) {
    answer = 0;
  } else if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  } else {
    /* 예외 부분 test 실패 */
    answer = -1;
  }

  return answer;
}

function add(number) {
  var answer = 0;

  while (true) {
    answer += number % 10;

    if (number > 9) {
      number = parseInt(number / 10);
    } else {
      return answer;
    }
  }
}

function multiple(number) {
  var answer = 1;

  while (true) {
    answer *= number % 10;

    if (number > 9) {
      number = parseInt(number / 10);
    } else {
      return answer;
    }
  }
}

module.exports = problem1;
