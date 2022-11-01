// 기능 목록
// 1. 돈의 단위 배열인 moneys와 개수를 담을 배열인 cnts 생성하기
// 2. money를 각각의 moneys로 나눠주고, 몫을 cnts에 저장하기

function problem5(money) {
  let moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let cnts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for(let i=0; i<9; i++) {
    cnts[i] = parseInt(money/moneys[i]);
    money = money-(moneys[i]*cnts[i]);
  }

  return cnts;
} 

module.exports = problem5;