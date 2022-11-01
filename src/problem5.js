// 2022 Kimjungwon 우아한테크코스 문제풀이 5

function problem5(money) {
  //제한사항1. money는 1이상 1,000,000이하인 자연수이다.
  if (money < 1 || money > 1000000) {
    return -1;
  }

  let answer = [];
  //화폐단위를 저장한 배열.
  let monetaryUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  //큰 금액의 화페 위주 이므로 50000원권을 시작으로 먼저 뽑는다.
  for (let i = 0; i < monetaryUnit.length; i++) {
    let count = Math.floor(money / monetaryUnit[i]);
    money -= count * monetaryUnit[i];
    answer.push(count);
  }


  return answer;
}

module.exports = problem5;
