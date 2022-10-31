function problem5(money) {
  let monetaryUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  let answer = new Array(monetaryUnit.length).fill(0)
  //정답 배열 선언

  for (let i = 0; i < monetaryUnit.length; i++) {
    while (money >= monetaryUnit[i]) {
      //가장 큰 단위를 최대한 많이 써야 하므로
      //현재의 화폐 단위가 주어진 금액보다 작아질때까지 반복
      answer[i] += 1
      money -= monetaryUnit[i]
    }
  }

  return answer
}

module.exports = problem5
