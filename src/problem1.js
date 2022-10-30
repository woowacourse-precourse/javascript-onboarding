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
  return answer;
};

module.exports = problem1;
