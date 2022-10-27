function problem1(pobi, crong) {
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

problem1([97, 98], [197, 198]);

module.exports = problem1;
