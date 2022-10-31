// 기능 목록
// 1. 화폐단위 배열 생성
// 2. reduce로 몫을 저장 및 나머지를 다음 loop로 넘겨주면서 결과 출력

function problem5(money) {
  var answer;
  answer = [];

  // 화폐 단위
  const kor_won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  // 루프를 돌며 화폐 단위로 나눈 money의 몫들을 배열에 저장
  kor_won.reduce((acc, ele) => {
    const 몫 = parseInt(acc / ele);
    const 나머지 = acc % ele;
    answer.push(몫);
    return 나머지;
  }, money);

  return answer;
}

module.exports = problem5;
