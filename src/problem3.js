function problem3(number) {
  var answer;
  let clap = 0;

  // * 특정 패턴에 매칭되는 숫자 찾게 정규표현식을 사용
  const regex365 = /3|6|9/g; // * 3이나 6이나 9를 모두 찾음
  if (number >= 1 && number <= 10000) {
    for (let i = 1; i <= number; i++) {
      // * 1부터 number까지 match 메서드로 3이나 6이나 9와 매칭되는 항목들을 배열로 반환하는데, 그 배열의 길이를 clap에 저장
      // * 예를 들어, 3이 매칭됐을 때 [3]이 매칭될 것이고 [3]의 길이 1이 증가됨
      clap += (String(i).match(regex365) || []).length;
    }
  }
  answer = clap;
  return answer;
}

module.exports = problem3;
