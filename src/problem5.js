// 나눌 수 있는 지폐 카운트 증가
const divide = (cash) => {
  // 입력 받은 금액을 지폐 단위로 나누어 떨어지는지 확인
  const result = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  if (cash >= 50000) {
    result[0] += Math.floor(cash/50000)
    cash = cash % 50000
    
  } 
  if (cash >= 10000 ){
    result[1] += Math.floor(cash/10000)
    cash = cash % 10000
  }
  if (cash >= 5000 ){
    result[2] += Math.floor(cash/5000)
    cash = cash % 5000
  }
  if (cash >= 1000 ){
    result[3] += Math.floor(cash/1000)
    cash = cash % 1000
  }
  if (cash >= 500) {
    result[4] += Math.floor(cash/500)
    cash = cash % 500
    
  } 
  if (cash >= 100 ){
    result[5] += Math.floor(cash/100)
    cash = cash % 100
  }
  if (cash >= 50 ){
    result[6] += Math.floor(cash/50)
    cash = cash % 50
  }
  if (cash >= 10 ){
    result[7] += Math.floor(cash/10)
    cash = cash % 10
  }
  if (cash >= 1 ){
    result[8] += Math.floor(cash/1)
    cash = cash % 1
  }
  return result
}


function problem5(money) {
  return divide(money)
}

module.exports = problem5;

