function returnNumber(page) {
  const pg = [...String(page)]
  const eachnum = []
  pg.map((num) => eachnum.push(parseInt(num)))
  return eachnum
}

function calcMaxScore(eachnum) {
  const sumvalue = eachnum.reduce((prev, curr) => prev + curr)
  const multiplyvalue = eachnum.reduce((prev, curr) => prev * curr)
  return Math.max(sumvalue, multiplyvalue)
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
