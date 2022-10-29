function problem5(money) {
  const banknotes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  return countsBanknotes(money, banknotes)
}

// TODO: 금액과 화폐의 종류를 입력받아 화폐 종류별로 필요한 갯수를 구한다.
function countsBanknotes(money, banknotes) {
  const counts = []
  let remain = money
  for (let i = 0; i < banknotes.length; i++) {
    counts[i] = (parseInt(remain / banknotes[i]))
    remain = remain % banknotes[i]
  }
  return counts
}

module.exports = problem5;
