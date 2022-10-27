function problem1(pobi, crong) {
  var answer;

  const splitPages = (book) => {
    return book.map((pages) => pages.toString().split('').map(Number));
  };

  const pobiBook = splitPages(pobi);
  const crongBook = splitPages(crong);

  return answer;
}

module.exports = problem1;
