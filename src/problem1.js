function problem1(pobi, crong) {
  let answer;
  


  return answer;
}

module.exports = problem1;

function sum(n) {
  let sumArr = (n+"").split("").map(x => parseInt(x))
  return sumArr.reduce((acc, cur) => acc + cur, 0)
}

function multiply(n) {
  let multiplyArr = (n+"").split("").map(x => parseInt(x))
  return multiplyArr.reduce((acc, cur) => acc * cur)
}