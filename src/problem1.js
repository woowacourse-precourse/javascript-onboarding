function checkBookPageError(book) {
  if (book[1] - book[0] !== 1) {
    return true;
  }
  if (book[0] === 1 || book[1] === 400) {
    return true;
  }

  return false;
}

function stringfyBookPageArr(book) {
  const stringBookPageArr = book.map((item) => String(item));

  return stringBookPageArr;
}

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

function pushSumOfBooks(book) {
  const bookPageSumOfPlus = plusPage(book);
  const bookPageSumOfMultiple = mutiplePage(book);
  let sumOfBookPageArr = [];

  sumOfBookPageArr.push(bookPageSumOfPlus, bookPageSumOfMultiple);
  return sumOfBookPageArr;
}

function findMaxNum(book) {
  const sumOfBookPageArr = pushSumOfBooks(book);
  const bookPageMax = Math.max(...sumOfBookPageArr);

  return bookPageMax;
}
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
