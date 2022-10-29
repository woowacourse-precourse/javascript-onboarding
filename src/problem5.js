function problem5(money) {
  const banknotes = getTypesOfBanknotes()
  const counts = countsBanknotes(money, banknotes)
  return counts;
}

// TODO: PROBLEM5.md의 설명에 맞춰 화폐 종류를 반환한다.
function getTypesOfBanknotes() {
  return []
}

// TODO: 금액과 화폐의 종류를 입력받아 화폐 종류별로 필요한 갯수를 구한다.
function countsBanknotes(money, banknotes) {
  return []
}

module.exports = problem5;
