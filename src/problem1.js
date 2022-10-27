function problem1(pobi, crong) {
  var answer;

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

  return answer;
}

problem1([97, 98], [197, 198]);

module.exports = problem1;
