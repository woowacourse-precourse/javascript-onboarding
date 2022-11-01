/*필요한 기능
for loop으로 각 char랑 그 다음 char 비교
연속된 중복 문자들 삭제
결과물 리턴
*/

function problem2(cryptogram) {
  var answer;
  return answer;
}

function solution() {
  for (i=0; i<1000; i++) {
    if (cryptogram.charAt(i) == cryptogram.charAt(i+1)) {
      cryptogram.replace(charAt(i), '');
      cryptogram.replace(charAt(i+1), '');
    }
  }
  return cryptogram;
}

module.exports = problem2;
