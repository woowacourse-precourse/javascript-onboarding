function problem3(number) {
  var answer;

  // 예외처리
  answer = errorHandler(number);
  // 게임진행
  answer = playGame(answer);

  return answer;
}

// 예외처리 및 숫자 쪼개는 함수
function errorHandler(num) {
  // 숫자들을 저장할 배열
  var arr = [];

  if (num > 10000) {
    // 10000보다 클 경우 10000까지의 숫자 저장
    for (i=1; i<10001; i++) arr.push(i);
  }
  else{
    for (i=1; i<num+1; i++) arr.push(i);
  }

  return arr;
}

// 게임진행 함수
function playGame(arr) {
  // 손뼉 횟수를 저장할 변수
  var count;
  var result;

  // 문자로 변환한 후 자리수별로 쪼개 3, 6, 9가 포함되있을 경우 count를 1 증가
  result = arr.toString().split('').filter(num => ['3', '6', '9'].includes(num))
  // 손뼉을 친 횟수 = result의 크기
  count = result.length;

  return count;
}

module.exports = problem3;
