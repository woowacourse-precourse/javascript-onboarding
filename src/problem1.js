const calcMaxValue = (page) => {
  const numbersArray = String(page).split("");
  const sum = numbersArray.reduce((acc, cur) => acc + Number(cur), 0);
  const multiple = numbersArray.reduce((acc, cur) => acc * Number(cur));

  return Math.max(sum, multiple);
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
