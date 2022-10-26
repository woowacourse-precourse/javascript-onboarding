const calcMaxValue = (page) => {
  const numbersArray = String(page).split("");
  const sum = numbersArray.reduce((acc, cur) => acc + Number(cur), 0);
  const multiple = numbersArray.reduce((acc, cur) => acc * Number(cur));

  return Math.max(sum, multiple);
};

const getScore = (pages) => {
  const [leftPage, rightPage] = pages;
  const leftPageValue = calcMaxValue(leftPage);
  const rightPageValue = calcMaxValue(rightPage);
  return Math.max(leftPageValue, rightPageValue);
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
