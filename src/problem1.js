function problem1(pobi, crong) {
  const [p1, p2] = pobi;
  const [c1, c2] = crong;

  // 1. 예외처리로 -1 반환
  const checkValidation = (pages) => {
    const [p1, p2] = pages;
    const check1 = Math.abs(p1 - p2) === 1;
    const check2 = p1 % 2 && !(p2 % 2);
    const check3 = 0 < p1 && p1 <= 400 && 0 < p2 && p2 <= 400;
    return check1 && check2 && check3;
  };

  if (!checkValidation(pobi) || !checkValidation(crong)) return -1;

  // 2. 포비와 크롱의 점수 계산
  const arraySum = (arr) => {
    return arr.reduce((n, ret) => ret + n);
  };
  const arrayMultiple = (arr) => {
    return arr.reduce((n, ret) => ret * n);
  };

  // 2.1. 페이지별 최대 점수 계산
  const calcPageMaxScore = (page) => {
    const nums = String(page)
      .split("")
      .map((n) => +n);
    return Math.max(arraySum(nums), arrayMultiple(nums));
  };

  // 2.2. 개인 최대 점수 계산
  const calcPersonalMaxScore = (pages) => {
    const [p1, p2] = pages;
    return Math.max(calcPageMaxScore(p1), calcPageMaxScore(p2));
  };

  const scorePobi = calcPersonalMaxScore(pobi);
  const scoreCrong = calcPersonalMaxScore(crong);

  // 3. 포비와 크롱의 점수 비교에 따른 결과 반환
  if (scorePobi > scoreCrong) return 1;
  if (scorePobi < scoreCrong) return 2;
  if (scorePobi === scoreCrong) return 0;
}

module.exports = problem1;
