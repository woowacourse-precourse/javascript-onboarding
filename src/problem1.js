function problem1(pobi, crong) {
  const [p1, p2] = pobi;
  const [c1, c2] = crong;

  // 1. 예외처리로 -1 반환
  const checkValidation = (pages) => {
    const [p1, p2] = pages;
    const check1 = Math.abs(p1 - p2) === 1;
    const check2 = p1 % 2 && !(p2 % 2);
    return check1 && check2;
  };

  if (!checkValidation(pobi) || !checkValidation(crong)) return -1;
}

module.exports = problem1;
