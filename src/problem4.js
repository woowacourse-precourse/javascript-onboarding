/*
 #기능 요구 사항
엄마 말씀 word가 매개변수로 주어질 때, 
아래 청개구리 사전을 참고해 반대로 변환하여 return 하도록 solution 메서드를 완성하라.
EX)A->Z, B->Y, C->X ..... Z->A

1. a-z, A-Z 까지의 문자를 짝에 맞게 아스키 코드를 통해서 변환한다.

*/

function problem4(word) {
  let answer;
  answer = solution(word);
  return answer;
}

function solution(word) {
  const result = change(word);
  return result;
}

/*a-z, A-Z 까지의 문자를 짝에 맞게 아스키 코드를 통해서 변환한다.*/
function change(word) {

  let reverse="";
  const Blank = 32;
  const UPPERSUM = 155;
  const LOWERSUM = 219;
  
  for(let i = 0; i<word.length;i++){

      if(word[i].charCodeAt(0) === Blank){
          reverse += word[i];
      } else if(word[i] === word[i].toUpperCase()) {
          reverse += String.fromCharCode(UPPERSUM - word[i].charCodeAt(0));
      } else if(word[i] === word[i].toLowerCase()){
          reverse += String.fromCharCode(LOWERSUM - word[i].charCodeAt(0));
  }
}

  return reverse;

}

module.exports = problem4;
