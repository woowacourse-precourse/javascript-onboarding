function problem5(money) {
  var answer = [0,0,0,0,0,0,0,0,0];
  var unit =[50000,10000,5000,1000,500,100,50,10,1];

  for(i=0;i<9;i++){
    if(money == 0){//money가 0이면 종료
      break;
    }
    while(money>=unit[i]){//해당 지폐값보다 크면 빼기
      money = money - unit[i];
      answer[i]++;
    }
  }

  
  return answer;
}

module.exports = problem5;
