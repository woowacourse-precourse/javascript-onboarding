function problem5(money) {
  //돈 범위
  const moneyRange = (money) => {
    if(money < 1 || money > 1000000 ) return false;
    else return true;
  };

  //전체 돈 종류 배열
  const moneyArr = [50000,10000,5000,1000,500,100,50,10,1];

  //지폐 계수 배열
  const answer = [];

  //지폐 종류별 갯수 구하는 함수
  if(moneyRange(money) === true)
  for(let i=0; i<moneyArr.length; i++){
    answer.push(Math.floor(money/moneyArr[i]))
    money = money%moneyArr[i];
  }
  return answer
}

module.exports = problem5;
