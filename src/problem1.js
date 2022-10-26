// 각 숫자를 모두 더하거나, 모두 곱해서 가장 큰 수 리턴하는 함수 (2,3번 요구사항)
const maxScore = (page) => {
  let sumScore = 0;
  let multipScore = 1;

  do {
    sumScore += page % 10;
    multipScore *= page % 10;
    page = parseInt(page / 10);
  } while (page > 0);

  return sumScore > multipScore ? sumScore : multipScore;
};

function problem1(pobi, crong) {
  let answer;
  return answer;
}

module.exports = problem1;
