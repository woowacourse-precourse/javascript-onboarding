function problem5(money) {
  //답 배열
  let answer=[];
  //주어진 돈을 금액 단위별로 계산해주는 함수
  const sample = (count) =>{
      answer.push(Math.floor(money/count));
      money=money%count;
  }
  
  //금액 단위별로 계산
  sample(50000);
  sample(10000);
  sample(5000);
  sample(1000);
  sample(500);
  sample(100);
  sample(50);
  sample(10);
  sample(1);
  
  return answer;
}

module.exports = problem5;
