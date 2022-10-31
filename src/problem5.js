function problem5(money) {
  //입력: 숫자 (돈의 액수)
  //출력: 9개의 요소를 가진 일차원 배열/[오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전]
  //해야할 일: Greedy 알고리즘으로 각 돈의 단위별로 나누고, 갯수 저장 후에 다시 거스름돈은 다음 단위로 나누기.
  let change = money;
  let count = 0;
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < moneys.length; i++) {
    if (change === 0) break;
    count += Math.floor(Number(change / moneys[i]));
    answer[i] = count;
    change = change % moneys[i];
    count = 0;
  }
  return answer;
}

module.exports = problem5;
