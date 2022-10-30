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
