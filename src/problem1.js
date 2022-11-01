function problem1(pobi, crong) {
  if (
    pobi[1] - pobi[0] != 1 ||
    crong[1] - crong[0] != 1 ||
    pobi[0] === 1 ||
    crong[0] === 1 ||
    pobi[1] === 400 ||
    crong[1] === 400
  )
    return -1;

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

  const pobiMax = Math.max(...pobiScore);
  const crongMax = Math.max(...crongScore);

  const answer = pobiMax === crongMax ? 0 : pobiMax > crongMax ? 1 : 2;

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
