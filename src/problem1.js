function problem1(pobi, crong) {
  var answer = result(pobi, crong);
  return answer;
}

function result(pobi, crong) {
  const isPobiValue = checkInput(pobi);
  const isCrongValue = checkInput(crong);

  if (!(isPobiValue && isCrongValue)) {
    // 입력받은 값이 NULL값이면 -1을 return한다.
    return -1;
  }

  const pobiScore = setScore(pobi);
  const crongScore = setScore(crong);

  if (pobiScore === crongScore) return 0;
  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
}

function checkInput(input) {
  if (input.length !== 2) return false;

  const [left, right] = input;
  const [startPage, lastPage] = [1, 400];

  if (left % 2 !== 1 && right % 2 !== 0) return false; // 홀수, 짝수가 아닌 값 처리
  if (left + 1 !== right) return false; // 홀수와 다음 짝수가 각각 left, right인지 처리
  if (left <= startPage || left >= lastPage) return false; // 시작 페이지와 끝 페이지 보다 작거나 큰 경우 처리
  if (right <= startPage || right >= lastPage) return false; // 동일

  return true;
}

function sumPageNum(page) {
  const pageNumbers = splitPageNumbers(page);
  return pageNumbers.reduce((sum, num) => (sum += num), 0);
}

function multiplyPageNum(page) {
  const pageNumbers = splitPageNumbers(page);
  return pageNumbers.reduce((multi, num) => (multi *= num), 1);
}

function splitPageNumbers(page) {
  const pageEl = page.toString().split("");
  return pageEl.map((el) => Number(el));
}

function setScore([left, right]) {
  return Math.max(
    // 가장 최대값
    sumPageNum(left),
    multiplyPageNum(left),
    sumPageNum(right),
    multiplyPageNum(right)
  );
}

module.exports = problem1;
