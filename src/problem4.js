function problem4(word) {
  var answer;
  return answer;
}

function errorHandler(word) {
  // 문자 쪼개기
  var arr = (word + '').split('');
  // 자리수가 1000을 넘을경우 1001번째 자리부터 끝까지 소거
  if (arr.length > 1000)  arr = arr.splice(1000, arr.length - 1);

  // 알파벳 판별은 아스키코드 변환 과정에서 손볼 예정
  return arr;
}

module.exports = problem4;
