function addPages(number) {
  let addSum = 0;
  let multiSum = 1;
  let str = parseInt(number).toString();

  for (let i = 0; i < str.length; i++) {
    addSum += parseInt(str[i]);
    multiSum *= parseInt(str[i]);
  }
  return comparePage(addSum, multiSum);
}

function comparePage(left, right) {
  return left > right ? left : right;
}

function checkException(pages) {
  return pages[0] + 1 === pages[1] ? true : false;
}

function problem1(pobi, crong) {
  var answer;
  if (!(checkException(pobi) && checkException(crong))) {
    return -1;
  }
  let pobipage = comparePage(addPages(pobi[0]), addPages(pobi[1]));
  let crongpage = comparePage(addPages(crong[0]), addPages(crong[1]));
  answer = pobipage === crongpage ? 0 : pobipage > crongpage ? 1 : 2;
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
