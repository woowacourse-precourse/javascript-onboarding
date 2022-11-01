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
    console.log("numChar: ", numChar)
    if (numChar <= 32) {
      console.log("if Space: ", word.charAt(i))
      result = result + " ";
      console.log("if Result: ", word.charAt(i))
    } else if (word.charAt(i) === word.charAt(i).toUpperCase()) {
      console.log("if Upper: ", word.charAt(i));
      result = result + String.fromCharCode((90 - (numChar-65)));
      console.log("Upper Result: ", String.fromCharCode((90 - (numChar-65))))
    } else if (word.charAt(i) === word.charAt(i).toLowerCase()) {
      console.log("if Lower: ", word.charAt(i))
      result = result + String.fromCharCode((122 - (numChar-97)));
      console.log("Lower Result: ", String.fromCharCode((90 - (numChar-65))))
    } 
  }
  return result;
}

module.exports = problem4;
