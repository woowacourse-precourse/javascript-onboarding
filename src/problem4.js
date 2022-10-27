// 엄마 말씀을 반대로 변환하는 기능(아스키 코드 활용)
function problem4(word) {
  const UPPER_A = 65,
        UPPER_Z = 90,
        UPPER_CENTER = 77.5,
        LOWER_A = 97,
        LOWER_Z = 122,
        LOWER_CENTER = 109.5; 
  let frog_word = '', ascii;
  
  for (let char of word) {
    ascii = char.charCodeAt(0);
    if (ascii >= UPPER_A && ascii <= UPPER_Z) {
      if (ascii < UPPER_CENTER) ascii += (UPPER_CENTER - ascii) * 2;
      else if (ascii > UPPER_CENTER) ascii -= (ascii - UPPER_CENTER) * 2;
      frog_word += String.fromCharCode(ascii);
    } 
    else if (ascii >= LOWER_A && ascii <= LOWER_Z) {
      if (ascii < LOWER_CENTER) ascii += (LOWER_CENTER - ascii) * 2;
      else if (ascii > LOWER_CENTER) ascii -= (ascii - LOWER_CENTER) * 2;
      frog_word += String.fromCharCode(ascii);
    } 
    else frog_word += char;
  }
  return frog_word;
}

module.exports = problem4;
