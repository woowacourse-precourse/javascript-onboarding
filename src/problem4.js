/*필요한 기능
for loop으로 문장 iterate
스페이스, 대문자, 소문자 구분
대소문자 바꿔주고 ASCII Table 보고 변환 
결과물 리턴
*/

function problem4(word) {
  var answer = solution(word);
  return answer;
}

function solution(word) {
  var result = "";
  for (var i=0; i<word.length; i++) {
    if (!isLetter(word.charAt(i))) {
      return result += " ";
    }
    var numChar = int (word.charAt(i));
    
  }
}

module.exports = problem4;
