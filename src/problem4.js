function problem4(word) {
  let answer = "";

  for(let char of word) {
    answer += charTransform(char);
  }
  
  return answer;
}

/**
 * @param {string} char 문자열의 한글자씩 입력으로 받습니다. 
 * @returns 청개구리 사전 패턴에 맞게 변환하여 반환합니다.
 */
function charTransform(char) {
  const UPPERCASE = 155;
  const LOWERCASE = 219;
  if ( char === " ") return " ";
  else if( char.toUpperCase() === char ) return String.fromCharCode(UPPERCASE - char.charCodeAt());
  else if( char.toLowerCase() === char ) return String.fromCharCode(LOWERCASE - char.charCodeAt());
}

module.exports = problem4;

