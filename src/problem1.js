function problem1(pobi, crong) {
  var answer;
  return answer;
}

function sumPage(num) {
  const numArr = num.toString().split("");
  const result = numArr.reduce((prev, cur) => prev + Number(cur), 0);

  return result;
}

function multiPage(num) {
  const numArr = num.toString().split("");
  const result = numArr.reduce((prev, cur) => prev * Number(cur), 1);

  return result;
}

module.exports = problem1;
