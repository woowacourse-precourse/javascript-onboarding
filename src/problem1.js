function addPages(number) {
  let addSum = 0;
  let multiSum = 1;
  let str = parseInt(number).toString();

  for (let i = 0; i < str.length; i++) {
    addSum += parseInt(str[i]);
    multiSum *= parseInt(str[i]);
  }
  return addSum > multiSum ? addSum : multiSum;
}

function comparePage(left, right) {
  return left > right ? left : right;
}

function problem1(pobi, crong) {
  var answer;

  return answer;
}

let pobi = [
  [97, 98],
  [131, 132],
  [99, 102],
];
let crong = [
  [197, 198],
  [211, 212],
  [211, 212],
];

module.exports = problem1;
