function problem1(pobi, crong) {}

function sumNumber(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, current) => parseInt(sum) + parseInt(current), 0);
}

function mutiNumber(number) {
  return number
    .toString()
    .split("")
    .reduce((muti, current) => parseInt(muti) * parseInt(current), 1);
}

module.exports = problem1;
