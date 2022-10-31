// 기능 목록
// 1. 공백 예외 처리
// 2. 대문자는 대문자역순, 소문자는 소문자역순 반환
// 3. 알파벳 이외문자 반환

function problem4(word) {
 
  const array = word.split("");
  const reverse = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let answer=[];

  for(let i=0; i<array.length; i++){
    if (array[i] == " ") answer += " ";
    else if (array[i] == array[i].toUpperCase()) answer += reverse[array[i].charCodeAt() - 65];
    else if (array[i] == array[i].toLowerCase()) answer += reverse[array[i].charCodeAt() - 97].toLowerCase();
    else answer += array[i];
  };

  return answer;
}

module.exports = problem4;
