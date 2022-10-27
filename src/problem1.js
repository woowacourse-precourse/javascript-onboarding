function problem1(pobi, crong) {
  //페이지 예외처리
  if (!isInPage(pobi) || !isInPage(crong)) {
    return -1;
  }

  // 사용자 각 페이지 순회
  const pobiMaxValue = Math.max(
    ...pobi.map((page) => calculatePageMaxValue(page))
  );
  const crongMaxValue = Math.max(
    ...crong.map((page) => calculatePageMaxValue(page))
  );

  // 각 조건에 따라 결과값 출력
}

// 사용자의 페이지 예외처리 기능
function isInPage(pages) {
  const leftPage = pages[0];
  const rightPage = pages[1];

  if (rightPage - leftPage !== 1) {
    return false;
  }
  if (leftPage % 2 === 0 || rightPage % 2 === 1) {
    return false;
  }
  if (leftPage === 1 || rightPage === 400) {
    return false;
  }
  if (pages.every((page) => page < 1 || pages > 400)) {
    return false;
  }
  return true;
}

//각 페이지 곱하기&더하기 연산 기능
function calculatePageMaxValue(page) {
  let pageNumberToString = page.toString().split("");
  let multyply = pageNumberToString.reduce((acc, cur) => acc * Number(cur), 1);
  let plus = pageNumberToString.reduce((acc, cur) => acc + Number(cur), 0);
  return Math.max(multyply, plus);
}

module.exports = problem1;
