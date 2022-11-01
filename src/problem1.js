function problem1(pobi, crong) {
  let answer = 0;
  if (pobi.length > 2 || crong.length > 2) return -1;
  if (
    pobi[1] - pobi[0] !== 1 ||
    crong[1] - crong[0] !== 1 ||
    pobi[0] === 1 ||
    crong[0] === 1 ||
    pobi[1] === 400 ||
    crong[1] === 400
  )
    return -1;
  if (pobi[0] < 1 || pobi[1] > 400 || crong[0] < 1 || crong[1] > 400) return -1;

  const pobisumleft = pobi[0]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);
  const pobisumright = pobi[1]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);
  const pobimulleft = pobi[0]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc *= Number(cur)), 1);
  const pobimulright = pobi[1]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc *= Number(cur)), 1);
  const pobisumMax = Math.max(pobisumleft, pobisumright);
  const pobimulMax = Math.max(pobimulleft, pobimulright);

  let pobiMax = Math.max(pobisumMax, pobimulMax);

  const crongsumleft = crong[0]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);
  const crongsumright = crong[1]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);

  const crongsumMax = Math.max(crongsumleft, crongsumright);

  const crongmulleft = crong[0]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc *= Number(cur)), 1);
  const crongmulright = crong[1]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc *= Number(cur)), 1);

  const crongmulMax = Math.max(crongmulleft, crongmulright);

  let crongMax = Math.max(crongsumMax, crongmulMax);

  if (pobiMax > crongMax) {
    answer = 1;
  } else if (pobiMax < crongMax) {
    answer = 2;
  } else if (pobiMax === crongMax) {
    answer = 0;
  } else answer = -1;
  return answer;
}
module.exports = problem1;
