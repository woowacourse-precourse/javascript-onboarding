function problem1(pobi, crong) {
  var answer;
  return answer;
}

const addPage = (page) => {
  return page
    .toString()
    .split("")
    .reduce((prev, cur) => prev + +cur, 0);
};

const multiplyPage = (page) => {
  return page
    .toString()
    .split("")
    .reduce((prev, cur) => prev * +cur, 1);
};

module.exports = problem1;
