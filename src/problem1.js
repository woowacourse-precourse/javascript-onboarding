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
