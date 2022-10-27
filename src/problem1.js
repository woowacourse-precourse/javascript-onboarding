function problem1(pobi, crong) {
  let answer;

  for (let i = 0; i < 1; i++) {
    let pobiScore, crongScore = 0;
    pobiScore = Math.max(sum(pobi[i]), sum(pobi[i+1]), multiply(pobi[i]), multiply(pobi[i+1]))
    crongScore = Math.max(sum(crong[i]), sum(crong[i+1]), multiply(crong[i]), multiply(crong[i+1]))

  }


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