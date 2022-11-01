function problem1(pobi, crong) {
  // 예외처리
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  // 페이지 숫자 쪼개기
  const pageLeftSplit = page => (page[0] + "").split("");
  const pageRightSplit = page => (page[1] + "").split("");

  // 페이지 왼쪽, 오른쪽 쪼갠 값
  let pobiLeftPageNum = pageLeftSplit(pobi);
  let crongLeftPageNum = pageLeftSplit(crong);
  let pobiRightPageNum = pageRightSplit(pobi);
  let crongRightPageNum = pageRightSplit(crong);

  // 최대 값 계산기
  const calcMaxSum = page => {
    let result = 0;

    for (let i = 0; i < page.length; i++) {
      result += parseInt(page[i]);
    }
    return result;
  };

  const calcMaxMultiply = page => {
    let result = 1;

    for (let i = 0; i < page.length; i++) {
      result *= parseInt(page[i]);
    }
    return result;
  };

  const getMaxValue = num => {
    return Math.max(calcMaxSum(num), calcMaxMultiply(num));
  };

  // 각 페이지 최대 값
  let pobiLeftMaxValue = getMaxValue(pobiLeftPageNum);
  let pobiRightMaxValue = getMaxValue(pobiRightPageNum);
  let crongLeftMaxValue = getMaxValue(crongLeftPageNum);
  let crongRightMaxValue = getMaxValue(crongRightPageNum);

  // 유저 점수
  let pobiScore = Math.max(pobiLeftMaxValue, pobiRightMaxValue);
  let crongScore = Math.max(crongLeftMaxValue, crongRightMaxValue);

  // //  점수 비교하기
  if (pobiScore === crongScore) return 0;
  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
}

module.exports = problem1;
