/*
  기능 목록
  1. 3부터 주어진 수까지 반복문을 통해 문자열로 변환
  2. 변환된 문자에 3,6,9 가 포함된 개수 만큼 카운터 한 뒤 리턴해주는 함수 구현
*/
function count369(str) {
  let count = 0;
  for(let i =0; i<str.length; i++) {
    if(str[i] == '3' || str[i] == '6' || str[i] == '9') {
      ++count;
    }
  }
  return count;
}

function problem3(number) {
  let answer = 0;
  for(let i =3; i<=number; i++) {
    let numToStr = i.toString();
    answer += count369(numToStr);
  }
  return answer;
}

module.exports = problem3;
