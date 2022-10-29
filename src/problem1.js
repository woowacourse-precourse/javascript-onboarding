function problem1(pobi, crong) {
  // 예외처리 적용
  if (errorHandler(pobi, crong)){
    return -1;
  }

  var answer;
  return answer;
}

// 예외처리 함수
function errorHandler(a, b){
  // 책 페이지가 잘못됬을 경우
  if ((a[1] - 1 != a[0]) | (b[1] - 1 != b[0])){
    return true;
  }
  // 첫페이지와 마지막페이지를 펼쳤을 경우
  else if ((a[0] >= 400) | (b[0] >= 400) | (a[0] <= 1) | (b[0] <= 1)){
    return true;
  }
  else return false;
}

// 입력받은 숫자의 각 자리수를 더하고 곱한 값을 비교하여 더 큰 수를 리턴하는 함수
function numToString(n){
  // 문자를 쪼갠 후 숫자로 치환
  var num = (n + '').split('').map(function(item) {
    return parseInt(item);
  });
  
  var plus = num[0];
  var multiple = num[0];

  // 1번 index부터 끝까지 탐색하며 연산 수행. 최초값이 0번 index값이라 1부터 시작
  for (i=1; i<num.length; i++){
    plus += num[i];
    multiple *= num[i];
  }

  // 값 비교
  if (plus >= multiple){
    return plus;
  }
  else return multiple;
}

// 본인의 점수를 계산하는 함수
function myScore(user){
  // 왼쪽 페이지와 오른쪽 페이지의 점수를 비교한 후 큰 점수를 리턴
  if (numToString(user[0]) >= numToString(user[1])){
    return numToString(user[0]);
  }
  else {
    return numToString(user[1]);
  }
}

module.exports = problem1;
