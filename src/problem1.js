function problem1(pobi, crong) {
  var answer;

  // 유효한 페이지인지 체크
  const isValidPobiPage = isValidPage(pobi[0], pobi[1]);
  const isValidCrongPage = isValidPage(crong[0], crong[1]);

  if (!isValidCrongPage || !isValidPobiPage) {
    return (answer = -1);
  }

  // 유효한 페이지인 경우 페이지 비교
  const pobiNumber =
    biggerNumber(pobi[0]) > biggerNumber(pobi[1])
      ? biggerNumber(pobi[0])
      : biggerNumber(pobi[1]);

  const crongNumber =
    biggerNumber(crong[0]) > biggerNumber(crong[1])
      ? biggerNumber(crong[0])
      : biggerNumber(crong[1]);

  if (pobiNumber === crongNumber) {
    answer = 0;
  } else if (pobiNumber > crongNumber) {
    answer = 1;
  } else if (pobiNumber < crongNumber) {
    answer = 2;
  }

  return answer;
}

function biggerNumber(page) {
  const splitPageNumber = String(page).split('');
  const sum = sumSplitPageNumber(splitPageNumber);
  const multiple = multipleSplitPageNumber(splitPageNumber);

  return sum > multiple ? sum : multiple;
}

function sumSplitPageNumber(splitPageNumber) {
  let sumPageNumber = splitPageNumber.map(Number).reduce((prev, curr) => {
    return prev + curr;
  });

  return sumPageNumber;
}
function multipleSplitPageNumber(splitPageNumber) {
  let multiplePageNumber = 1;
  splitPageNumber.forEach((splitNumber) => {
    multiplePageNumber *= splitNumber;
  });

  return multiplePageNumber;
}

function isValidPage(leftPageNumber, rightPageNumber) {
  // (좌)400페이지, (우)1페이지 일 때 예외
  // left와 right 페이지의 차이가 1이 아니면 예외
  if (leftPageNumber >= 400) return false;
  if (rightPageNumber <= 1) return false;
  if (rightPageNumber - leftPageNumber !== 1) return false;
  return true;
}

module.exports = problem1;
