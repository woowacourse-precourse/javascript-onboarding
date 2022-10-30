function problem4(word) {
  var answer;
  word = upTOlower(word)
  
  return answer = String.fromCharCode(...word)
  
}
console.log(problem4("I love you"))
module.exports = problem4;


// 작동 프로그램 = 주어진 단어에 단어 별 반대 언어가 추출되도록 하는 프로그램

// 1. 각 자리의 알파벳을 반대로 답하는 기능.
// 각 알파벳의 아스키 코드를 10진수로 변환
function ascToNum(str){
  let asciiNum = str.split('').map(item => item.charCodeAt())
  return asciiNum
}

// 2. 대문자는 대문자로, 소문자는 소문자로 반환.
function upTOlower(str){
  str = ascToNum(str)
  let alphaBetArr = []
  for(i=0; i < str.length; i++){
    if(str[i] === 32) alphaBetArr.push(32)
    if(65<=str[i] && str[i]<=90) alphaBetArr.push(155 - str[i])
    if(97 <= str[i] && str[i]<= 122) alphaBetArr.push(219-str[i])
  }
  return alphaBetArr
}
// console.log(upTOlower("I love you"))

/* 깨달은 것
1. 자바스크립트 if 조건문에서 괄호 안에 연속 적인 비교를 사용할 수 없다.
   그렇기에 && 연산자를 사용해주지 않으면 전자의 조건만 비교 함.

2. 배열 안의 숫자를 숫자열로 사용하고 싶으면 스프레드 문법(...)을 사용하면 된다.

*/




