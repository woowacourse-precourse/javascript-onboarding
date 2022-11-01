function calc(money,price,answer){
  curr = parseInt(money / price);
  money = money % price;
  answer.push(curr);
  //console.log ("함수" ,money,answer)
  //지폐 갯수확인하는 함수 생성

  return money;
} 

function problem5(money) {
  var answer =[];

  price = 50000;
  money = calc(money,price,answer);

  //50000원 지폐 필요 갯수확인  

  price = 10000;
  money = calc(money,price,answer);
  
  //50000원 필요갯수 만큼 곱한 수 제외 10000원 필요갯수확인

  price = 5000;
  money = calc(money,price,answer);
  
  //10000원 필요갯수 만큼 곱한 수 제외 5000원 필요갯수확인

  price = 1000;
  money = calc(money,price,answer);
  
  //5000원 필요갯수 만큼 곱한 수 제외 1000원 필요갯수확인

  price = 500;
  money = calc(money,price,answer);
  
  //1000원 필요갯수 만큼 곱한 수 제외 500원 필요갯수확인

  price = 100;
  money = calc(money,price,answer);
  
  //500원 필요갯수 만큼 곱한 수 제외 100원 필요갯수확인

  price = 50;
  money = calc(money,price,answer);
  
  //100원 필요갯수 만큼 곱한 수 제외 50원 필요갯수확인

  price = 10;
  money = calc(money,price,answer);
  
  //10원 필요개수 배열 등록

  price = 1;
  money = calc(money,price,answer);
  
  //1원 필요개수 배열 등록 

  return answer;
}

module.exports = problem5;
