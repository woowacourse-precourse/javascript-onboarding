function problem1(pobi, crong) {
  let answer;

  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  const getSum = (page) => {
    return page.toString().split('').reduce((a, b) => a + Number(b), 0);
  };

  const check = (arr) => {
    if (arr.length !== 2) return false;
    if (arr[0] + 1 !== arr[1]) return false;
    if (arr[0] % 2 === 0) return false;
    if (arr[0] <= 1) return false;
    if (arr[1] >= 400) return false;
    return true;
  }
  if (!check(pobi) || !check(crong)) return answer = -1;
  else {

  }
  return answer;
}

module.exports = problem1;
