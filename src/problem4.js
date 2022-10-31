function problem4(word) {
  let answer = "";

  for(let char of word) {
    answer += charTransform(char);
  }
  
  return answer;
}

/**
 * @description 청개구리 사전 패턴에 따라 변환하고 반환합니다. 
 * @param {string} char 문자열의 한글자씩 입력으로 받습니다. 
 * @returns {string} 문자열을 반홥합니다.
 */
function charTransform(char) {
  const UPPERCASE = 155;
  const LOWERCASE = 219;
  const isAlphabet = /[a-zA-Z]/g;
  if(!isAlphabet.test(char)) return char
  else if( char.toUpperCase() === char ) return String.fromCharCode(UPPERCASE - char.charCodeAt());
  else if( char.toLowerCase() === char ) return String.fromCharCode(LOWERCASE - char.charCodeAt());
}

module.exports = problem4;

