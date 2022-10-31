function problem1(pobi, crong) {
  let answer;

  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  if (pobi.length !== 2 || crong.length !== 2) {
    console.error('유효한 페이지 번호를 입력해주세요');
    return -1;
  }

  if (pobiLeftPage % 2 === 0 || crongLeftPage % 2 === 0) {
    console.error('왼쪽 페이지는 홀수입니다');
    return -1;
  }

  if (
    pobiLeftPage + 1 !== pobiRightPage ||
    crongLeftPage + 1 !== crongRightPage
  ) {
    return -1;
  }

  if (pobiLeftPage === 1 || crongLeftPage === 1) {
    console.error('시작 면을 제외하고 펼쳐주세요');
    return -1;
  }

  if (pobiRightPage === 400 || crongRightPage === 400) {
    console.error('마지막 면을 제외하고 펼쳐주세요');
    return -1;
  }

  const pobiNum = splitNumber(pobi);
  const crongNum = splitNumber(crong);

  const sumOfPobi = sumOfPage(pobiNum);
  const sumOfCrong = sumOfPage(crongNum);
  const multiplyOfPobi = multiplyOfPage(pobiNum);
  const multiplyOfCrong = multiplyOfPage(crongNum);

  const pobiMaxNumber = getBiggerNumber(sumOfPobi, multiplyOfPobi);
  const crongMaxNumber = getBiggerNumber(sumOfCrong, multiplyOfCrong);

  if (pobiMaxNumber === crongMaxNumber) {
    answer = 0;
  }

  if (pobiMaxNumber > crongMaxNumber) {
    answer = 1;
  }

  if (pobiMaxNumber < crongMaxNumber) {
    answer = 2;
  }

  return answer;
}

function splitNumber(user) {
  return user.map((num) => num.toString().split(''));
}

function sumOfPage(arr) {
  return arr.map((num) =>
    num.reduce((prev, curr) => Number(prev) + Number(curr))
  );
}

function multiplyOfPage(arr) {
  return arr.map((num) =>
    num.reduce((prev, curr) => Number(prev) * Number(curr))
  );
}

function getBiggerNumber(num1, num2) {
  return Math.max(...num1, ...num2);
}

module.exports = problem1;
