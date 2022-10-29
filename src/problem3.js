function problem3(number) {
  
  // 제한 사항 만족하는지 체크
  // - number는 1 이상 10,000 이하인 자연수이다.
  if (number < 1 || number > 10000) return false;
  if (!(/^[0-9]+$/.test(number))) return false;
  
}

module.exports = problem3;
