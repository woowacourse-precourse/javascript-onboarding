function problem1(pobi, crong) {
  // 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 - 1로 return 한다.
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  const DRAW = 0;
  const EXCEPTIONS = -1;

  // 책의 페이지가 연속된 숫자이어야 한다. (예외사항)
  if (pobi[0] !== pobi[1] - 1 || crong[0] !== crong[1] - 1) return EXCEPTIONS;

  // 페이지 번호의 각 자리 숫자를 더한 값과 곱한 값중 큰 값을 리턴한다.
  const getMaxScore = (pages) => {
    return Math.max(
      ...pages.map((page) => {
        const split = String(page).split("").map(Number);
        const sum = split.reduce((acc, cur) => acc + cur);
        const multiply = split.reduce((acc, cur) => acc * cur);

        return Math.max(...[sum, multiply]);
      })
    );
  };

  // 가장 큰 수를 본인의 점수로 한다.
  const pobiScore = getMaxScore(pobi);
  const crongScore = getMaxScore(crong);

  if (pobiScore > crongScore) return POBI_WIN;
  if (pobiScore < crongScore) return CRONG_WIN;
  if (pobiScore === crongScore) return DRAW;

  return EXCEPTIONS;
}

module.exports = problem1;
