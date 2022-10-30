function problem1(pobi, crong) {
  // 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 - 1로 return 한다.
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  const DRAW = 0;
  const EXCEPTIONS = -1;
  const MIN_PAGE = 1;
  const MAX_PAGE = 400;

  const [leftPageByPobi, rightPageByPoi] = pobi;
  const [leftPageByCrong, rightPageByCrong] = crong;

  // 책의 페이지가 연속된 숫자이어야 한다. (예외사항)
  if (leftPageByPobi !== rightPageByPoi - 1 || leftPageByCrong !== rightPageByCrong - 1) return EXCEPTIONS;

  // 페이지가 1~400 범위 밖의 값이라면 예외사항을 반환한다.
  if (leftPageByPobi < MIN_PAGE || leftPageByCrong < MIN_PAGE) return EXCEPTIONS;
  if (rightPageByPoi > MAX_PAGE || rightPageByCrong > MAX_PAGE) return EXCEPTIONS;

  // 포비와 크롱이 펼친 페이지의 홀수 짝수 순서가 맞아야 한다.
  if (leftPageByPobi % 2 !== leftPageByCrong % 2) return EXCEPTIONS;

  // pobi와 crong의 배열 길이가 2가 아닌 경우 예외사항을 반환한다.
  if (pobi.length !== 2 || crong.length !== 2) return EXCEPTIONS;

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
