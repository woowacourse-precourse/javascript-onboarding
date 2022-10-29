function problem5(money) {
  var answer =[];


  console.log("머니 유형확인", money)
  
  price = 50000
  curr = parseInt(money / price)
  money = money % price
  answer.push(curr)
  
  //50000원 지폐 필요 갯수확인  

  price = 10000
  curr = parseInt(money / price)
  money = money % price
  answer.push(curr)
  
  //50000원 필요갯수 만큼 곱한 수 제외 10000원 필요갯수확인

  price = 5000
  curr = parseInt(money / price)
  money = money % price
  answer.push(curr)
  
  //10000원 필요갯수 만큼 곱한 수 제외 5000원 필요갯수확인

  price = 1000
  curr = parseInt(money / price)
  money = money % price
  answer.push(curr)
  
  //5000원 필요갯수 만큼 곱한 수 제외 1000원 필요갯수확인

  price = 500
  curr = parseInt(money / price)
  money = money % price
  answer.push(curr)
  
  //1000원 필요갯수 만큼 곱한 수 제외 500원 필요갯수확인

  price = 100
  curr = parseInt(money / price)
  money = money % price
  answer.push(curr)
  
  //500원 필요갯수 만큼 곱한 수 제외 100원 필요갯수확인

  price = 50
  curr = parseInt(money / price)
  money = money % price
  answer.push(curr)
  
  //100원 필요갯수 만큼 곱한 수 제외 50원 필요갯수확인

  price = 10
  curr = parseInt(money / price)
  money = money % price
  answer.push(curr)
  
  //10원 필요개수 배열 등록

  price = 1
  curr = parseInt(money / price)
  money = money % price
  answer.push(curr)
  
  //1원 필요개수 배열 등록 

  return answer;
}

module.exports = problem5;
