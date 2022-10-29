function problem1(pobi, crong) {
  if(isValid(pobi) || isValid(crong)) return -1;
}

const isValid = (pageArr) => {
  return (pageArr[1] - pageArr[0] !== 1);
};

module.exports = problem1;
