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

function plusAndMultiPages(book) {
  const stringBookPageArr = stringfyBookPageArr(book);
  let [bookPageSumOfPlus, bookPageSumOfMultiple] = [0, 0];
  let i = 0;

  for (; i < 2; i++) {
    bookPageSumOfPlus = [...stringBookPageArr[i]].reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
    bookPageSumOfMultiple = [...stringBookPageArr[i]].reduce((acc, cur) => {
      return acc * parseInt(cur);
    }, 1);
  }

  return [bookPageSumOfPlus, bookPageSumOfMultiple];
}

function pushSumOfBooks(book) {
  const [bookPageSumOfPlus, bookPageSumOfMultiple] = plusAndMultiPages(book);
  let sumOfBookPageArr = [];

  sumOfBookPageArr.push(bookPageSumOfPlus, bookPageSumOfMultiple);

  return sumOfBookPageArr;
}

function findMaxNum(book) {
  const SumOfBookPageArr = pushSumOfBooks(book);
  const bookMax = Math.max(...SumOfBookPageArr);

  return bookMax;
}
function problem1(firstBook, secondBook) {
  if (
    checkBookPageError(firstBook) === true ||
    checkBookPageError(secondBook) === true
  ) {
    return -1;
  }
  const firstBookSumArr = pushSumOfBooks(firstBook);
  const secondBookSumArr = pushSumOfBooks(secondBook);

  const firstBookMax = findMaxNum(firstBookSumArr);
  const secondBookMax = findMaxNum(secondBookSumArr);
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
