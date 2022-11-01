/*필요한 기능
for loop으로 각 char랑 그 다음 char 비교
연속된 중복 문자들 삭제
결과물 리턴
*/

function problem2(cryptogram) {
  var answer = solution(cryptogram);
  return answer;
}

function solution(cryptogram) {
  for (var i=0; i<cryptogram.length+2; i++) {
    for (var j=0; j<cryptogram.length; j++) {
      console.log(cryptogram.charAt(j), "!!!!!!!!!!!!!!!!!", cryptogram.charAt(j+1))
      if (cryptogram.charAt(j) === cryptogram.charAt(j+1)) {
        cryptogram = cryptogram.slice(0, j) + cryptogram.slice(j+2);
        console.log("result: ", cryptogram);
      }
    }
  }
  return cryptogram;
}

module.exports = problem2;
