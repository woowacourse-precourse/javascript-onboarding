// 포비와 크롱이 페이지 번호가 1부터 시작되는 400 페이지의 책을 주웠다. 책을 살펴보니 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수 번호이고 모든 페이지에는 번호가 적혀있었다.
// 책이 마음에 든 포비와 크롱은 페이지 번호 게임을 통해 게임에서 이긴 사람이 책을 갖기로 한다. 페이지 번호 게임의 규칙은 아래와 같다.

// 책을 임의로 펼친다.
// 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
// 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
// 2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
// 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
// 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.
// 포비와 크롱이 펼친 페이지가 들어있는 배열 pobi와 crong이 주어질 때, 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return 하도록 solution 메서드를 완성하라.

// 제한사항
// pobi와 crong의 길이는 2이다.
// pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다.

const getMaxScore = ([left, right]) => {
  const leftList = spreadNumberToNumberArray(left);
  const rightList = spreadNumberToNumberArray(right);

  return Math.max(
    getTotalAdd(leftList),
    getTotalAdd(rightList),
    getTotalMulti(leftList),
    getTotalMulti(rightList),
  );
};

const getTotalAdd = (array) => {
  return array.reduce((acc, cur) => acc + cur, 0);
};

const getTotalMulti = (array) => {
  return array.reduce((acc, cur) => acc * cur, 1);
};

const spreadNumberToNumberArray = (number) => {
  return (number + "").split("").map((char) => Number(char));
};

const checkPage = ([left, right]) => {
  if (left + 1 !== right) return false;
  else if (right >= 400 || left <= 1) return false;
  else if (left % 2 === 0 || right % 2 === 1) return false;
};

function problem1(pobi, crong) {
  // 예외사항 : 우 - 좌가 1이 아니면 -1 처리
  if (!checkPage(pobi) || !checkPage(crong)) return -1;

  const pobiScore = getMaxScore(pobi);
  const crongScore = getMaxScore(crong);
  if (pobiScore === crongScore) return 0;
  else if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;

  return;
}

module.exports = problem1;
