function problem1(pobi, crong) {
  let answer;
  const vp = validNum(pobi[0], pobi[1])
  const vc = validNum(crong[0], crong[1])

  if (!vp || !vc) return -1

  const p = highestNum(pobi[0], pobi[1])
  const c = highestNum(crong[0], crong[1])

  if (p > c) answer = 1
  else if (p < c) answer = 2
  else answer = 0

  return answer;
}
function highestNum(left, right) {
  let lMax = 0
  let rMax = 0
  lMax = Math.max(left.toString().split('').reduce((a,b) => a*1 + b*1), left.toString().split('').reduce((a,b) => a*b))
  rMax = Math.max(right.toString().split('').reduce((a,b) => a*1 + b*1), right.toString().split('').reduce((a,b) => a*b))
  return Math.max(lMax, rMax)
}
function validNum(left, right) {
  if (!left || !right || left%2 !== 1 || right%2 !== 0 || left < 2 || right < 2 || left > 398 || right > 398 || right - left > 1 ) return false

  return true
}
module.exports = problem1;
