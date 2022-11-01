function problem1(pobi, crong) {
  var answer;
  function calculate(member) {
    let page = member;
    let sum = 0;
    let multiple = 1;
    do {
      sum += page % 10;
      multiple *= page % 10;
      page = Math.floor(page / 10);
    } while (page > 0);
    if (sum > multiple) {
      return sum;
    } else {
      return multiple;
    }
  } // 점수 계산 함수
  function score(member) {
    const left_page = calculate(member[0]);
    const right_page = calculate(member[1]);
    if (left_page > right_page) {
      return left_page;
    } else {
      return right_page;
    }
  } // 왼쪽 페이지와 오른쪽 페이지 비교하여 member의 score 정하기
  function err(member1, member2) {
    let err = false;
    if (
      (member1[0] || member2[0]) == 1 ||
      (member1[1] || member2[1]) == 400 ||
      member1[1] != member1[0] + 1 ||
      member2[1] != member2[0] + 1
    ) {
      err = true;
    }
    return err;
  } //예외사항 확인(첫번째나 마지막페이지 폈을 때, 연속된 페이지가 아닐 때)

  if (err(pobi, crong) == true) {
    answer = -1;
  } else if (score(pobi) > score(crong)) {
    answer = 1;
  } else if (score(pobi) < score(crong)) {
    answer = 2;
  } else if (score(pobi) === score(crong)) {
    answer = 0;
  } //승패무, 예외사항 적용하여 answer값 변경
  return answer;
}

module.exports = problem1;
