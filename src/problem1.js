function problem1(pobi, crong) {
  const MIN = 1;
  const MAX = 400;

  function getSum(page) {
    return String(page).split("").reduce((acc, curr) => acc += Number(curr), 0);
  }

  function getMul(page) {
    return String(page).split("").reduce((acc, curr) => acc *= Number(curr), 1);
  }

  function getMaxScore(pages) {
    const [left, right] = pages;
    return Math.max(getSum(left), getSum(right), getMul(left), getMul(right));
  }

  function winner(pobiScore, crongScore) {
    if (pobiScore > crongScore) {
      return 1;
    }
    if (crongScore > pobiScore) {
      return 2;
    }
    if (crongScore === pobiScore) {
      return 0
    }
  }

  function isError(pages) {
    const [left, right] = pages;
    // 시작페이지
    if (left <= MIN || right <= MIN) {
      return true;
    }
    // 마지막 페이지
    if (left >= MAX || right >= MAX) {
      return true;
    }
    // 페이지 연속 검사
    if (right - left !== 1) {
      return true;
    }
    return false;
  }
}

module.exports = problem1;
