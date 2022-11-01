//요구사항
//1~400page의 책에서 임의로 책을 펼친다.
//왼/오page 번호를 얻는다.
//왼/오의 숫자를 순서대로 배열에 넣는다. ------> (ok)
//배열 안의 숫자를 더하거나 곱해 가장 큰 정수를 만든다.
//포비와 크롱의 각각의 가장 큰 정수를 비교한다.
//더 큰 정수를 갖고 있는 사람이 승자이다.
//포비가 이기면 1, 크롱이 이기면 2, 무승부면 0, 예외사항은 -1을 리턴한다.
//answer를 리턴하도록 solution 메소드를 만든다.

function problem1(pobi, crong) {
  if (!validate(pobi) || !validate(crong)) return -1; //exception

  const scorePobi = maxScore(pobi);
  const scoreCrong = maxScore(crong);

  return getWinner(scorePobi, scoreCrong);
}

function validate(pages) {
  const [left, right] = pages;
  const isBook = left < 1 || right > 400; //first page //last page
  const isSeq = left + 1 === right;

  if (isBook || !isSeq) return false;

  return true;
}

function getScore(page) {
  let num = page;
  let sum = 0;
  let multi = 1;

  while (num !== 0) {
    const dig = num % 10;

    sum += dig;
    multi *= dig;
    num = Math.floor(num / 10);
  }

  return sum > multi ? sum : multi;
}

function maxScore(pages) {
  const [left, right] = pages;
  const scoreLeft = getScore(left);
  const scoreRight = getScore(right);
  return scoreLeft > scoreRight ? scoreLeft : scoreRight;
}

function getWinner(scorePobi, scoreCrong) {
  let winner;

  if (scorePobi > scoreCrong) {
    winner = 1;
  } else if (scorePobi < scoreCrong) {
    winner = 2;
  } else {
    winner = 0;
  }

  return winner;
}


module.exports = problem1;
