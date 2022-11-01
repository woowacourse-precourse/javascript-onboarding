function problem4(word) {
  //기능 1. 문자열 하나하나를 끊어서 배열에 넣고 역순으로 넣기
  word.split("").reverse().join("");
 
  var answer=word;
  return answer;
}

module.exports = problem4;
