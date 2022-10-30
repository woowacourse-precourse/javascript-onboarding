function problem5(money) {
  var answer;

  //제한 사항
  if(money < 1 || money > 1000000){
    return -1;
  }

  let result = []; //결과 배열

  let N = 50000;
  for(let i = 0; i <= 8; i++){
    if(i == 8){
      result[i] = money;
      break;
    }
    result[i] = parseInt(money / N);
    money = money % N;
    if(i % 2 == 0){
      N = parseInt(N / 5);
    } else {
      N = parseInt(N / 2);
    }
  }
  console.log(result);

  return answer;
}

//테스트 케이스 #1
problem5(50237);

//테스트 케이스 #2
problem5(15000);

module.exports = problem5;
