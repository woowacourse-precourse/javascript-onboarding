// 기능 목록
// 1. 결과 값의 리스트를 만드는 기능
// 2. 화폐 단위 별 몫과 나머지를 구하는 기능

// 몫과 나머지를 구하는 함수
function divide(unit, money){
  // 몫과 나머지를 저장
  const share = parseInt(money / unit);
  const remainder = money % unit;

  return [share, remainder];
}

// 결과 값의 리스트를 만드는 함수
function solution(money){
  // 화폐 단위 리스트
  const unit_list = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
  // 결과 값을 넣을 리스트
  let result_list = [];
  // 값을 나눌때마다 저장할 변수
  let temp_money = money;

  // 몫은 리스트에, 나머지는 temp_money에 저장하여 순회
  for(unit of unit_list){
    [share, remainder] = divide(unit, temp_money);
    result_list.push(share);
    temp_money = remainder;
  }
  // 마지막 1원 단위는 그대로 저장
  result_list.push(temp_money);

  return result_list;
}

function problem5(money) {
  // 결과 값을 반환받아 할당
  const answer = solution(money);
  return answer;
}

module.exports = problem5;