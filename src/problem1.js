class PageError {
  constructor(pobi, crong) {
    this.pobi = pobi;
    this.crong = crong;
  }

  checkLimit() {
    return [...this.pobi, ...this.crong].every(
      (page) => 1 < page && page < 400
    );
  }

  checkNext() {
    return [this.pobi, this.crong].every(
      ([leftPage, rightPage]) =>
        rightPage - leftPage === 1 && leftPage % 2 === 1
    );
  }

  checkLength() {
    return [this.pobi, this.crong].every((book) => book.length === 2);
  }

  checkAllError() {
    if (!(this.checkLimit() && this.checkNext() && this.checkNext())) {
      return false;
    }

    return true;
  }
}

function problem1(pobi, crong) {
  const pageError = new PageError(pobi, crong);
  if (!pageError.checkAllError()) return -1;

  return 0;
}

// 에러 테스트
console.log(problem1([1, 2], [3, 4])); // 시작이 1일 때 에러
console.log(problem1([3, 4], [399, 400])); // 끝이 400일 때
console.log(problem1([-1, 0], [3, 4])); // 0미만의 값이 있을 때
console.log(problem1([22, 23], [33, 34])); // 왼쪽 페이지가 짝수 일 때
console.log(problem1([23, 28], [33, 34])); // 왼쪽 오른쪽 페이지가 2이상 차이날 때

module.exports = problem1;
