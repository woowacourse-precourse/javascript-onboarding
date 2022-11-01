// 2022 Kimjungwon 우아한테크코스 문제풀이 3

function problem3(number) {

  //제한사항 : number는 1이상 10,000 이하인 자연수이다.
  if (number < 1 || number > 10000) {
    return -1;
  }
  //변수 regexp369는 '3','6','9'를 판별하는 정규표현식이다.
  //전체 문자열을 탐색하고 반환하기 위해서 'g'플래그를 사용
  let answer;
  let count = 0;
  const regexp369 = /3|6|9/g;

  //match()의 결과, 일치하는 것이 없으면 null을 반환하므로 '|| []'을 추가했다.
  for (let i = 1; i < number + 1; i++) {
    count += (String(i).match(regexp369) || []).length;
  }

  answer = count;
  return answer;
}

module.exports = problem3;
