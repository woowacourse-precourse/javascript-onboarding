function problem1(pobi, crong) {
  let answer;

  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  if (pobi.length !== 2 || crong.length !== 2) {
    alert('유효한 페이지 번호를 입력해주세요');
    return;
  }

  if (pobiLeftPage % 2 === 0 || crongLeftPage % 2 === 0) {
    alert('왼쪽 페이지는 홀수입니다');
  }

  if (
    pobiLeftPage + 1 !== pobiRightPage ||
    crongLeftPage + 1 !== crongRightPage
  ) {
    return -1;
  }

  if (pobiLeftPage === 1 || crongLeftPage === 1) {
    alert('시작 면을 제외하고 펼쳐주세요');
    return;
  }

  if (pobiRightPage === 400 || crongRightPage === 400) {
    alert('마지막 면을 제외하고 펼쳐주세요');
    return;
  }

  const pobiLeftPageArray = splitNumber(pobiLeftPage);
  const pobiRightPageArray = splitNumber(pobiRightPage);
  const crongLeftPageArray = splitNumber(crongLeftPage);
  const crongRightPageArray = splitNumber(crongRightPage);

  const pobiLeftSum = sumOfPage(pobiLeftPageArray);
  const pobiRightSum = sumOfPage(pobiRightPageArray);
  const crongLeftSum = sumOfPage(crongLeftPageArray);
  const crongRightSum = sumOfPage(crongRightPageArray);

  const pobiLeftMultiply = multiplyOfPage(pobiLeftPageArray);
  const pobiRightMultiply = multiplyOfPage(pobiRightPageArray);
  const crongLeftMultiply = multiplyOfPage(crongLeftPageArray);
  const crongRightMultiply = multiplyOfPage(crongRightPageArray);

  const pobiLeftMaxNumber = getBiggerNumber(pobiLeftSum, pobiLeftMultiply);
  const pobiRightMaxNumber = getBiggerNumber(pobiRightSum, pobiRightMultiply);
  const pobiMaxNumber = getBiggerNumber(pobiLeftMaxNumber, pobiRightMaxNumber);

  const crongLeftMaxNumber = getBiggerNumber(crongLeftSum, crongLeftMultiply);
  const crongRightMaxNumber = getBiggerNumber(
    crongRightSum,
    crongRightMultiply
  );
  const crongMaxNumber = getBiggerNumber(
    crongLeftMaxNumber,
    crongRightMaxNumber
  );

  if (pobiMaxNumber === crongMaxNumber) return 0;

  pobiMaxNumber > crongMaxNumber ? (answer = 1) : (answer = 2);

  return answer;
}

function splitNumber(page) {
  return page.toString().split('');
}

function sumOfPage(arr) {
  return arr.reduce((prev, curr) => Number(prev) + Number(curr));
}

function multiplyOfPage(arr) {
  return arr.reduce((prev, curr) => Number(prev) * Number(curr));
}

function getBiggerNumber(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}

module.exports = problem1;
