// main
function problem1(pobi, crong) {
  // 예외처리 적용
  if (errorHandler(pobi, crong)){
    return -1;
  }

  // 리턴할 answer 값
  var answer;

  // 각 인원의 점수 산출
  var pobiScore = myScore(pobi);
  var crongScore = myScore(crong);

  // 승부 판정
  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore)  answer = 2;
  else answer = 0;

  return answer;
}

// 예외처리 함수
function errorHandler(a, b){
  if ((a[1] - 1 != a[0]) | (b[1] - 1 != b[0])){
    return true;
  }
  else if ((a[0] >= 400) | (b[0] >= 400) | (a[0] <= 1) | (b[0] <= 1)){
    return true;
  }
  else return false;
}

// 입력받은 숫자의 각 자리수를 더하고 곱한 값을 비교하여 더 큰 수를 리턴하는 함수
function numToString(n){
  var num = (n + '').split('').map(function(item) {
    return parseInt(item);
  });
  var plus = num[0];
  var multiple = num[0];

  for (i=1; i<num.length; i++){
    plus += num[i];
    multiple *= num[i];
  }

  if (plus >= multiple){
    return plus;
  }
  else return multiple;
}

// 본인의 점수를 계산하는 함수
function myScore(user){
  if (numToString(user[0]) >= numToString(user[1])){
    return numToString(user[0]);
  }
  else {
    return numToString(user[1]);
  }
}

module.exports = problem1;
