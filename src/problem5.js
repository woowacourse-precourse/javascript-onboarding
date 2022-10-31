function problem5(money) {
  var answer;
  //단위 별 갯수를 푸쉬해주고 남은 돈을 처리해주는 함수
  const disposeMoney = (many, count) =>{
    answer.push(many); 
    money=money % count;
  }

  //주어진 돈을 금액 단위별로 계산해주는 함수
  const calculateMoney = (count) =>{
      const many = Math.floor(money / count); //단위 별 필요한 갯수
      disposeMoney(many, count);
     
  }
  
  //금액 단위별로 계산
  for(let amount of amounts){
    calculateMoney(amount);
  }
 
  return answer;
}

module.exports = problem5;
