// 유효한 페이지인지 확인
function checkBookPageError(book) {
  if (book[1] - book[0] !== 1) {
    return true;
  }
  if (book[0] === 1 || book[1] === 400) {
    return true;
  }

  return false;
}

// array의 원소를 string으로 변환시켜주는 함수
function stringfyBookPageArr(book) {
  const stringBookPageArr = book.map((item) => String(item));

  return stringBookPageArr;
}

// string의 각 자릿수를 더해주는 함수
function plusPage(book) {
  const stringBookPageArr = stringfyBookPageArr(book);
  let i = 0;
  let bookPageSumOfPlus = [];
  for (; i < 2; i++) {
    bookPageSumOfPlus = [...stringBookPageArr[i]].reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
  }
  return bookPageSumOfPlus;
}

// string의 각 자릿수를 곱해주는 함수
function mutiplePage(book) {
  const stringBookPageArr = stringfyBookPageArr(book);
  let i = 0;
  let bookPageSumOfMultiple = [];

  for (; i < 2; i++) {
    bookPageSumOfMultiple = [...stringBookPageArr[i]].reduce((acc, cur) => {
      return acc * parseInt(cur);
    }, 1);
  }
  return bookPageSumOfMultiple;
}
// 더한 값과 곱한 값을 하나의 배열에 넣어주는 함수
function pushSumOfBooks(book) {
  const bookPageSumOfPlus = plusPage(book);
  const bookPageSumOfMultiple = mutiplePage(book);
  let sumOfBookPageArr = [];

  sumOfBookPageArr.push(bookPageSumOfPlus, bookPageSumOfMultiple);
  return sumOfBookPageArr;
}

// 배열에서 최대 값을 찾아주는 함수
function findMaxNum(book) {
  const sumOfBookPageArr = pushSumOfBooks(book);
  const bookPageMax = Math.max(...sumOfBookPageArr);

  return bookPageMax;
}

// 값을 받아 조건에 따라 결과를 출력하는 함수
function problem1(firstBook, secondBook) {
  if (
    checkBookPageError(firstBook) === true ||
    checkBookPageError(secondBook) === true
  ) {
    return -1;
  }

  const firstBookMax = findMaxNum(firstBook);
  const secondBookMax = findMaxNum(secondBook);
  if (firstBookMax > secondBookMax) {
    return 1;
  }
  if (firstBookMax < secondBookMax) {
    return 2;
  }
  if (firstBookMax === secondBookMax) {
    return 0;
  }

  return -1;
}
module.exports = problem1;
