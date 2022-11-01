const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  var answer = [];
  for (let element of moneyArr) {
    const cnt = Math.trunc(money / element);
    answer.push(cnt);
    money -= cnt * element;
  }
  return answer;
}

module.exports = problem5;


/*
구현
1. 화폐 단위가 순서대로 저장된 moneyArr 생성
2. moneyArr를 돌며 변환된 값 받아서 answer 배열에 push
3. 변환값 구하는 함수
  3-a. money를 요소값으로 나누기
  3-b. 2-a번의 몫을 answer에 push
  3-c. 2번의 나머지 값을 money로 바꾼 후 2번 반복
*/
