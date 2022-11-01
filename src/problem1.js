function problem1(pobi, crong) {
  // 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 - 1로 return 한다.
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  const DRAW = 0;
  const EXCEPTIONS = -1;
  const MIN_PAGE = 1;
  const MAX_PAGE = 400;

  // pobi와 crong의 값이 배열 형태가 아니라면 예외사항을 반환한다.
  if (!Array.isArray(pobi) || !Array.isArray(crong)) return EXCEPTIONS;

  // pobi와 crong의 배열 길이가 2가 아닌 경우 예외사항을 반환한다.
  if (pobi.length !== 2 || crong.length !== 2) return EXCEPTIONS;

  const [leftPageByPobi, rightPageByPobi] = pobi;
  const [leftPageByCrong, rightPageByCrong] = crong;

  // 책의 페이지가 연속된 숫자이어야 한다. (예외사항)
  if (leftPageByPobi !== rightPageByPobi - 1 || leftPageByCrong !== rightPageByCrong - 1) return EXCEPTIONS;

  // 페이지가 1~400 범위 밖의 값이라면 예외사항을 반환한다.
  if (leftPageByPobi < MIN_PAGE || leftPageByCrong < MIN_PAGE) return EXCEPTIONS;
  if (rightPageByPobi > MAX_PAGE || rightPageByCrong > MAX_PAGE) return EXCEPTIONS;

  // 왼쪽 페이지가 짝수이거나, 오른쪽 페이지가 홀수인 경우 예외사항을 반환한다.
  if (leftPageByPobi % 2 === 0 || leftPageByCrong % 2 === 0 || rightPageByPobi === 1 || rightPageByCrong === 1) return EXCEPTIONS;

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
