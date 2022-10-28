//page가 책에 범위에 해당되는지 확인
function check(page) {
  if (page[0] >= 1 && page[0] <= 399 && page[0] + 1 === page[1]) {
    return true;
  } else {
    return false;
  }
}

// 두 페이지 중에서 만들 수 있는 가장 큰 값을  return
function findMax(page) {
  const left = String(page[0]);
  const right = String(page[1]);
  let left_result = [0, 1];
  let right_result = [0, 1];

  for (i = 0; i < left.length; i++) {
    left_result[0] += parseInt(left[i]);
    left_result[1] *= parseInt(left[i]);
  }
  for (i = 0; i < right.length; i++) {
    right_result[0] += parseInt(right[i]);
    right_result[1] *= parseInt(right[i]);
  }

  return Math.max(
    left_result[0],
    left_result[1],
    right_result[0],
    right_result[1]
  );
}

function problem1(pobi, crong) {
  var answer;
  let pobi_result = 0;
  let crong_result = 0;

  if (check(pobi) && check(crong)) {
    pobi_result = findMax(pobi);
    crong_result = findMax(crong);

    //페이지로 생성할 수 있는 최대값 비교
    if (pobi_result > crong_result) {
      answer = 1;
    } else if (pobi_result < crong_result) {
      answer = 2;
    } else {
      answer = 0;
    }
  } else {
    //예외 상황일 때
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
