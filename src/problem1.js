function problem1(pobi, crong) {
  let answer = 0;

  if (
    pobi[1] - pobi[0] !== 1 ||
    crong[1] - crong[0] !== 1 ||
    pobi[0] === 1 ||
    crong[0] === 1
  )
    return -1;
  if (pobi[0] % 2 === 0) return -1;
  if (pobi[0] === 1) return -1;
  if (pobi[1] === 400) return -1;
  // pobi 더하기,곱하기
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
  console.log("pobi더하기=", pobisumleft, pobisumright);
  console.log("제일 큰숫자 = ", pobisumMax);
  const pobimulMax = Math.max(pobimulleft, pobimulright);
  console.log("pobi곱하기=", pobimulleft, pobimulright);
  console.log("제일 큰 숫자 = ", pobimulMax);
  let pobiMax = Math.max(pobisumMax, pobimulMax);
  console.log("둘중 더큰 숫자 = ", pobiMax);
  // crong 더하기 곱하기
  const crongsumleft = crong[0]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);
  const crongsumright = crong[1]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);
  console.log("crong더하기=", crongsumleft, crongsumright);
  const crongsumMax = Math.max(crongsumleft, crongsumright);
  console.log("제일 큰 숫자=", crongsumMax);
  const crongmulleft = crong[0]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc *= Number(cur)), 1);
  const crongmulright = crong[1]
    .toString()
    .split("")
    .reduce((acc, cur) => (acc *= Number(cur)), 1);
  console.log("crong곱하기 = ", crongmulleft, crongmulright);
  const crongmulMax = Math.max(crongmulleft, crongmulright);
  console.log("제일 큰 숫자 = ", crongmulMax);
  let crongMax = Math.max(crongsumMax, crongmulMax);
  console.log("둘중 더큰 숫자 =", crongMax);
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
