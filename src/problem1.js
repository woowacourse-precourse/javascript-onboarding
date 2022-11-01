function problem1(pobi, crong) {
  var answer;
  return answer;
}

function sum(page) {
  let arr = page
    .toString()
    .split("")
    .map((x) => parseInt(x));
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function multiplication(page) {
  let arr = page
    .toString()
    .split("")
    .map((x) => parseInt(x));
  return arr.reduce((acc, cur) => acc * cur);
}

module.exports = problem1;
