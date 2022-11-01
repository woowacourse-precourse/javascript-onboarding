function problem3(number) {
  var answer;

  if (violationChk(number)) {
    answer = 0;

    // 1 ~ number까지의 숫자가 각각 3,6,9 를 몇 개 포함하는지 세서 총합 구하기
    for (var i = 1; i <= number; i++) {
      answer += counter(i);
    }
  }

  return answer;
}

// 입력된 숫자가 1 이상 10,000 이하인지 확인하는 함수
function violationChk(number) {
  return number > 0 && number <= 10000;
}

// 입력된 숫자가 3,6,9를 몇 개 포함하는지 세는 함수
function counter(num) {
  var result = 0;
  var number = num;

  while (parseInt(number / 10) != 0) {
    // 검사하는 자리수가 0이 아니고 3의 배수면 카운트 증가
    if (number % 10 > 0 && (number % 10) % 3 == 0) {
      result++;
    }
    // 검사한 자리수 제거
    number = parseInt(number / 10);
  }

  // 최대 자리수가 3의 배수면 카운트 증가
  if (number % 3 == 0) {
    result++;
  }

  return result;
}

module.exports = problem3;
