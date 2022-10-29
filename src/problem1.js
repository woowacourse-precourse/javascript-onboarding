/*
[x] 페이지가 올바른 페이지인지 확인하는 기능을 구현한다.
[x] 페이지가 첫 페이지인지 확인하는 기능을 구현한다.
[x] 페이지가 마지막 페이지인지 확인하는 기능을 구현한다.
[x] 페이지 각 자리를 더하는 기능을 구현한다.
[x] 페이지 각 자리를 곱하는 기능을 구현한다.
[x] 유저의 점수를 구하는 기능을 구현한다.
[x] 포비나 크롱의 페이지가 올바르지 않은 페이지면 -1을 반환한다.
[x] 포비나 크롱의 페이지가 첫 페이지면 -1을 반환한다.
[x] 포비나 크롱의 페이지가 마지막 페이지면 -1을 반환한다.
[x] 포비와 크롱의 점수를 구한다.
[x] 포비가 이긴다면 1을, 크롱이 이긴다면 2를, 무승부라면 0을 반환한다.
*/

class PageGame {
  constructor(firstPage = 1, lastPage = 400) {
    this.firstPage = firstPage;
    this.lastPage = lastPage;
  }

  _isValidPage(page) {
    const [leftPage, rightPage] = page;
    if (typeof leftPage !== "number" || typeof rightPage !== "number") {
      return false;
    }
    if (rightPage <= leftPage) {
      return false;
    }
    if (leftPage < this.firstPage || leftPage > this.lastPage - 1) {
      return false;
    }
    if (rightPage < this.firstPage + 1 || rightPage > this.lastPage) {
      return false;
    }
    if (rightPage - leftPage !== 1) {
      return false;
    }
    return true;
  }

  _isFirstPage(page) {
    const [leftPage, rightPage] = page;
    if (leftPage === this.firstPage && rightPage === this.firstPage + 1) {
      return true;
    }
    return false;
  }

  _isLastPage(page) {
    const [leftPage, rightPage] = page;
    if (leftPage === this.lastPage - 1 && rightPage === this.lastPage) {
      return true;
    }
    return false;
  }

  _validate(page) {
    if (!this._isValidPage(page) || this._isFirstPage(page) || this._isLastPage(page)) {
      return false;
    }
    return true;
  }

  _sumEachPageNumbers(page) {
    let total = 0;
    for (const eachPage of page) {
      for (const eachDigitString of String(eachPage)) {
        total += parseInt(eachDigitString, 10);
      }
    }
    return total;
  }

  _multiplyEachPageNumbers(page) {
    let total = 1;
    for (const eachPage of page) {
      for (const eachDigitString of String(eachPage)) {
        total *= parseInt(eachDigitString, 10);
      }
    }
    return total;
  }

  calculateScore(page) {
    if (!this._validate(page)) {
      throw new Error("page is not valid.");
    }
    return Math.max(this._sumEachPageNumbers(page), this._multiplyEachPageNumbers(page));
  }
}

function problem1(pobi, crong) {
  const pageGame = new PageGame();

  try {
    const pobiScore = pageGame.calculateScore(pobi);
    const crongScore = pageGame.calculateScore(crong);

    if (pobiScore > crongScore) {
      return 1;
    }
    if (pobiScore < crongScore) {
      return 2;
    }
    return 0;
  } catch (e) {
    return -1;
  }
}

module.exports = problem1;
