function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  const sumPage = (page) => {
    let pageArr = page
      .toString()
      .split("")
      .map((i) => parseInt(i));
    return pageArr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  };

  const multiplyPage = (page) => {
    let pageArr = page
      .toString()
      .split("")
      .map((i) => parseInt(i));
    return pageArr.reduce((acc, cur) => {
      return acc * cur;
    }, 1);
  };

  const maxPage = (left, right) => {
    return Math.max(
      sumPage(left),
      sumPage(right),
      multiplyPage(left),
      multiplyPage(right)
    );
  };

  let maxPobiPage = maxPage(pobi[0], pobi[1]);
  let maxCrongPage = maxPage(crong[0], crong[1]);

  if (maxPobiPage > maxCrongPage) return 1;
  else if (maxPobiPage < maxCrongPage) return 2;
  else if (maxPobiPage === maxCrongPage) return 0;
}

module.exports = problem1;
