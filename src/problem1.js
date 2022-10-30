const createResults = (page) => {
  const splitPage = page.toString().split('');

  return [
    splitPage.reduce((total, currentNum) => +total + +currentNum),
    splitPage.reduce((total, currentNum) => +total * +currentNum),
  ];
};

const problem1 = (pobi, crong) => {
  let answer;
  const pobiPages = pobi;
  const crongPages = crong;

  if (pobiPages[1] - pobiPages[0] > 1 || crongPages[1] - crongPages[0] > 1) {
    return -1;
  }

  return answer;
};

module.exports = problem1;
