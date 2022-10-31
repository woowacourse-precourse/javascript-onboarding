function problem1(pobi, crong) {
  function pageNumEachPlus(numList) {
    let plusResult = numList.reduce((pre, cur) => pre + cur);
    return plusResult;
  }

  function pageNumEachMultiply(numList) {
    let multiplyResult = numList.reduce((pre, cur) => pre * cur);
    return multiplyResult;
  }

  function except(pageNums) {
    let pageDiff = pageNums[0] - pageNums[1];
    return pageDiff === -1 ? false : true;
  }

  if (except(pobi) || except(crong)) return -1;

  let [pobiScore, crongScore] = [0, 0];
  let result = 0;

  pobi.forEach((pageNum) => {
    let pageNumList = String(pageNum).split("").map(Number);
    pobiScore = Math.max(
      pobiScore,
      pageNumEachPlus(pageNumList),
      pageNumEachMultiply(pageNumList)
    );
  });

  crong.forEach((pageNum) => {
    let pageNumList = String(pageNum).split("").map(Number);
    crongScore = Math.max(
      crongScore,
      pageNumEachPlus(pageNumList),
      pageNumEachMultiply(pageNumList)
    );
  });

  if (pobiScore > crongScore) {
    result = 1;
  } else if (pobiScore < crongScore) {
    result = 2;
  }

  return result;
}

module.exports = problem1;
