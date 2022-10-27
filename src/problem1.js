function problem1(pobi, crong) {
  //예외처리 (페이지가 서로 안붙어있을 때)
  const isPageAttached = (book) => {
    if (book[1] - book[0] !== 1) return false;
    return true;
  };

  if (!isPageAttached(pobi) || !isPageAttached(crong)) return -1;

  const splitPages = (book) => {
    return book.map((pages) => pages.toString().split('').map(Number));
  };

  const getMaxPage = (pages) => {
    const sum = pages.reduce((acc, cur) => acc + cur);
    const multiple = pages.reduce((acc, cur) => acc * cur);

    return Math.max(sum, multiple);
  };

  const pobiBook = splitPages(pobi);
  const crongBook = splitPages(crong);

  const pobiScore = Math.max(...pobiBook.map((pages) => getMaxPage(pages)));
  const crongScore = Math.max(...crongBook.map((pages) => getMaxPage(pages)));

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  if (pobiScore === crongScore) return 0;

  return -1;
}

module.exports = problem1;
