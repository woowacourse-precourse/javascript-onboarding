function problem5(money) {
  let answer = [];
  let sortedMoneyArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < sortedMoneyArray.length; i++) {
    let count = 0;
    while (money - sortedMoneyArray[i] >= 0) {
      money -= sortedMoneyArray[i];
      count += 1;
    }
    answer.push(count);
  }

  return answer;
}

module.exports = problem5;

// 입력값 : 숫자

// 구현 방향성
// 금액별 배열 [50000,10000,5000,1000,500,100,50,10,1]을 선언한다.
// 금액별 배열의 길이 만큼 반복하는 반복문을 작성한다.
// money에서 현재 금액을 뺄 수 있을 만큼 빼며 뺀 횟수를 카운팅하는 반복문을 작성한다.
// answer에 반복횟수를 push한다.
