function problem4(word) {
  var answer="";
  let reverseChar, reverseIndex;
  const upperStart = 65, upperEnd = 90, lowerStart = 97, lowerEnd = 122;
  for(let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    const charIndex = word.charCodeAt(i);
    if(char == ' ') answer += char;
    else {
      if(charIndex >= 97) {
        reverseIndex = lowerEnd - (charIndex - lowerStart);
        reverseChar = String.fromCharCode(reverseIndex);
      } else {
        reverseIndex = upperEnd - (charIndex - upperStart);
        reverseChar = String.fromCharCode(reverseIndex);
      }
      answer += reverseChar;
    }
  }
  return answer;
}

module.exports = problem4;
