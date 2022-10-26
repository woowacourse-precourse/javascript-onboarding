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
  const pobiScore = Math.max(maxScore(pobi[0]), maxScore(pobi[1]));
  const crongScore = Math.max(maxScore(crong[0]), maxScore(crong[1]));

  if (pobiScore > crongScore) answer = 1;
  if (pobiScore < crongScore) answer = 2;
  if (pobiScore === crongScore) answer = 0;

  return answer;
}

module.exports = problem1;
