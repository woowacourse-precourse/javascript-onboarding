function problem5(money) {
  var answer;
  //단위 별 갯수를 푸쉬해주고 남은 돈을 처리해주는 함수
  const disposeMoney = (many, count) =>{
    answer.push(many); 
    money=money % count;
  }

  return answer;
}

module.exports = problem5;
