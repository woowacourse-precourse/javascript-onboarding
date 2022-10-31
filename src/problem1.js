function problem1(pobi, crong) {
  var answer = -1;

  var pobiScore, crongScore;

  if (
    parseInt(pobi[0]) == parseInt(pobi[1]) - 1 &&
    parseInt(crong[0]) == parseInt(crong[1]) - 1
  ) {
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

    answer = pobiScore >= crongScore ? (pobiScore == crongScore ? 0 : 1) : 2;
  }

  return answer;
}

function add(number) {
  var answer = 0;

  while (true) {
    answer += number % 10;

    if (number <= 9) return answer;
    number = parseInt(number / 10);
  }
}

function multiple(number) {
  var answer = 1;

  while (true) {
    answer *= number % 10;

    if (number <= 9) return answer;
    number = parseInt(number / 10);
  }
}

module.exports = problem1;
