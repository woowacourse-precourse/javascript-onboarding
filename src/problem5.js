function problem5(money) {

  //1. 단위가 큰 순으로 배열 만들어 몫 반환
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for(let i = 0; i < unit.length; i++){
    quo = Math.floor(money/unit[i]);
    //2. 몫을 출력, 잔돈 계산
    if (quo > 0){
      answer[i] = quo;
      money -= quo*unit[i];
    }
  }
 
  
  return answer;
}

module.exports = problem5;
