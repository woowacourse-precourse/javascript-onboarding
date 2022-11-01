/*
 #기능 요구 사항
임의의 문자열 cryptogram이 매개변수로 주어질 때, 
연속하는 중복 문자들을 삭제한 결과를 return 하도록 solution 메서드를 완성하라.

1. 연속하는 중복 문자들을 재귀적으로 삭제한다. 

*/

function problem2(cryptogram) {
  let answer;
  answer =  solution(cryptogram);
  return answer;
}

function solution(cryptogram) {
  const result = removeCharacter(cryptogram);
  return result;
}

/*연속하는 중복 문자들을 재귀적으로 삭제한다. */
function removeCharacter(word) {

  let copyWord = [...word];
  let cnt = 0;

  for(let i = 0; i<copyWord.length;i++){
      if(copyWord[i] === copyWord[i+1]){
          cnt++;
          copyWord.splice(i,2);
      }
  }

 if(cnt === 0){
      return copyWord.join("");
  } else {
     return removeCharacter(copyWord.join(""));
 }

}

module.exports = problem2;
