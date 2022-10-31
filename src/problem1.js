function pageCheck(pobi, crong) {
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) {
    // 페이지가 왼쪽 오른쪽 순서대로 되어있는지 확인
    return false;
  } else if (pobi.length !== 2 || crong.length !== 2) {
    // 페이지 길이 확인
    return false;
  }

  return true;
}

function maxPageValue(pageArr) {
  const pageValueList = [];
  const pageLeft = (pageArr[0] + "").split("").map((ele) => parseInt(ele));
  const pageRight = (pageArr[1] + "").split("").map((ele) => parseInt(ele));

  // 왼쪽 페이지
  pageValueList[0] = pageLeft.reduce((acc, cur) => acc + cur, 0);
  pageValueList[1] = pageLeft.reduce((acc, cur) => acc * cur, 1);

  // 오른쪽 페이지
  pageValueList[2] = pageRight.reduce((acc, cur) => acc + cur, 0);
  pageValueList[3] = pageRight.reduce((acc, cur) => acc * cur, 1);

  // 왼쪽 페이지, 오른쪽 페이지 계산된 값 중 가장 큰 값 반환
  return Math.max(...pageValueList);
}

function problem1(pobi, crong) {
  var answer;
  if (!pageCheck(pobi, crong)) return -1;

  const pobiMax = maxPageValue(pobi);
  const crongMax = maxPageValue(crong);

  // 조건에 맞게 값 비교해서 정답 반환
  if (pobiMax > crongMax) answer = 1;
  else if (pobiMax < crongMax) answer = 2;
  else if (pobiMax === crongMax) answer = 0;

  return answer;
}

module.exports = problem1;
