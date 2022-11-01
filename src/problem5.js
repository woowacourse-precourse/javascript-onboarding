function problem5(money) {
  var answer;
  return answer;
}

function exchangeTo50000(money) {
  const FIVEHUNDREDTHOUSAND = 500000
  const FIFTYTHOUSAND = 50000
  let cnt = 0
  while (money >= FIVEHUNDREDTHOUSAND) {
    cnt += 10
    money -= FIVEHUNDREDTHOUSAND
  }
  while (money >= FIFTYTHOUSAND) {
    cnt += 1
    money -= FIFTYTHOUSAND
  }
  return cnt
}

module.exports = problem5;
