function problem5(money) {
  const count = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; //화폐 단위에 따를 배열선언
  let answer = [];
  let total = money; //계산이 끝났을 때의 돈 초기값으로 들어온 돈

  for (let i = 0; i < count.length; i++) {
    //화폐 단위의 수만큼 반복
    const cnt = Math.floor(total / count[i]); //해당 화폐단위로 변환되는 개수

    total = total % count[i]; //변환후의 남은 금액

    answer.push(cnt); //결과 배열에 해당 화폐로 변환된 개수 넣어주기
  }

  return answer; //결과 배열 반환
}

module.exports = problem5;
