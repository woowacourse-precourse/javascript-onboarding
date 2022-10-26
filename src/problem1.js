const max_range = 400;
const min_range = 1;

//페이지 객체 생성
function Page(add, multiply) {
  this.add = add;
  this.multiply = multiply;
  this.score = Math.max(this.add, this.multiply);
}

//각 자리수의 합을 구하는 함수
function page_add(page) {
  let answer = 0;
  for (let i = 0; i < page.length; i++) {
    let number = Number(page[i]);

    answer += number;
  }

  return answer;
}

//각 자리수의 곱을 구하는 함수
function page_mulitply(page) {
  let answer = 1;
  for (let i = 0; i < page.length; i++) {
    let number = Number(page[i]);
    answer *= number;
  }

  return answer;
}

//범위를 벗어나는 경우
function out_of_bound(person) {
  if (person <= min_range || person >= max_range) {
    return true;
  }
  return false;
}

//책의 쪽이 연속적이지 않는 경우
function is_successive(left, right) {
  if (right - left != 1) {
    return false;
  }
  return true;
}

//홀수이면 1,짝수이면 0
function is_odd(number) {
  if (number % 2 != 0) {
    return true;
  }
  return false;
}

function problem1(pobi, crong) {
  var answer;

  //포비의 왼쪽 페이지 객체생성(각 자리의 합,각 자리의 곱,두 가지 중 최대값 저장)
  let pobi_left_page = new Page(
    page_add(pobi[0].toString()),
    page_mulitply(pobi[0].toString())
  );

  //포비의 오른쪽 페이지 객체
  let pobi_right_page = new Page(
    page_add(pobi[1].toString()),
    page_mulitply(pobi[1].toString())
  );

  //포비의 최종 점수
  const pobi_score = Math.max(pobi_left_page.score, pobi_right_page.score);

  //크롱의 왼쪽 페이지 객체 생성
  let crong_left_page = new Page(
    page_add(crong[0].toString()),
    page_mulitply(crong[0].toString())
  );

  //크롱의 오른쪽 페이지 객체 생성
  let crong_right_page = new Page(
    page_add(crong[1].toString()),
    page_mulitply(crong[1].toString())
  );

  //크롱의 최종 점수
  const crong_score = Math.max(crong_left_page.score, crong_right_page.score);

  //페이지가 연속적이지 않는 경우(포비)
  if (is_successive(pobi[0], pobi[1]) === false) {
    answer = -1;
  }
  //페이지가 연속적이지 않은 경우(크롱)
  else if (is_successive(crong[0], crong[1]) === false) {
    answer = -1;
  }
  //첫 페이지나 마지막 페이지에 도달, 또는 범위를 벗어나는 경우
  else if (
    out_of_bound(pobi[0]) ||
    out_of_bound(pobi[1]) ||
    out_of_bound(crong[0]) ||
    out_of_bound(crong[1])
  ) {
    answer = -1;
  }
  //첫 페이지가 짝수, 다음 페이지가 홀수인 경우 올바르지 않은 케이스
  else if (is_odd(pobi[0]) === false && is_odd(pobi[1]) === true) {
    answer = -1;
  } else if (is_odd(crong[0]) === false && is_odd(crong[1]) === true) {
    answer = -1;
  } else if (crong_score > pobi_score) {
    answer = 2;
  } else if (pobi_score > crong_score) {
    answer = 1;
  } else if (pobi_score == crong_score) {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
