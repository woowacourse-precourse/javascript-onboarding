function problem3(number) {
  const numArr = new Array(number).fill().map((_, index) => index + 1);
  const filterNum = numArr.join("").match(/[3|6|9]/g);
  return filterNum.length;
}

module.exports = problem3;
