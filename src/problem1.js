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

function leftandright(user) {
  const arr = []
  user.map((score) => arr.push(calcMaxScore(returnNumber(score))))
  return arr
}

function compareEach(arr) {
  left = arr[0]
  right = arr[1]
  return Math.max(left, right)
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
