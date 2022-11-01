function problem1(pobi, crong) {
  var answer;

  const pobiScore = [
    sum(pobi[0]),
    sum(pobi[1]),
    multiplication(pobi[0]),
    multiplication(pobi[1]),
  ];

  const crongScore = [
    sum(crong[0]),
    sum(crong[1]),
    multiplication(crong[0]),
    multiplication(crong[1]),
  ];

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
