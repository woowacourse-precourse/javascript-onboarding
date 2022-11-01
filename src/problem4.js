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
    var numChar = word.charAt(i).charCodeAt(0);
    if (numChar <= 32) {
      result = result + " ";
    } else if (word.charAt(i) === word.charAt(i).toUpperCase()) {
      result = result + String.fromCharCode((90 - (numChar-65)));
    } else if (word.charAt(i) === word.charAt(i).toLowerCase()) {
      result = result + String.fromCharCode((122 - (numChar-97)));
    } 
  }
  return result;
}

module.exports = problem4;
