function problem5(money) {
  // var answer = 0
   money = bankAccount(money)
  
  return money
}

module.exports = problem5;

// 작동 프로그램 = 계좌의 돈을 지폐 단위로 환산하는 프로그램

function bankAccount(num){
  // 1. 배열의 각 자리수가 무엇인가
  let coinArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10 ,1]
  let account = []
  // 2. 계좌에 현금을 계산하여 카운트 하는 기능
  for(let i=0; i < coinArr.length; i++){
    account.push(Math.trunc(num / coinArr[i]))
    // 계산하고 남은 현금
    num = num % coinArr[i]
  }
  return account
}

console.log(problem5(50237))


/* 깨달은 것
1. 반복문을 사용하는 이유는 각 인덱스별로 추출하여 
   할당한 배열의 인덱스 값을 불러오기 위함
*/