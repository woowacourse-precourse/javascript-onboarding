function problem5(money) {
  var answer;
  var moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  var moneyCount = [0,0,0,0,0,0,0,0,0]
  var temp = money 
  var idx = 0

  moneyList.forEach(coin => {
    moneyCount[idx] = parseInt(temp / coin)
    temp = temp % coin; 
    idx ++

  })  

    
  answer = moneyCount
  

  return answer;
}
// console.log(problem5(50237))

module.exports = problem5;

// 그리디문제 거스름돈이 모두 배수와 약수 관계 즉 그리디문제에 해당됨
// 가장 큰단위의 거스름돈 부터 거스르는게 가장 좋은선택
// 주어진 숫자를 5만원부터 1원까지 나눠 몫을 구하고 나머지를 넘겨줌
// 12345 원이면 만원을 나누고 몫을 솔루션 리스트에 추가함(1번리스트)
// 나머지 값을 answer 변수에 덮어씀 오천원으로 나눔 쭉쭉반복
// 결과 리스트를 리턴