function problem4(word) {
  let answer = "";

  for(let char of word) {
    answer += charTransform(char);
  }
  
  return answer;
}

function charTransform(char) {
  const UPPERCASE = 155;
  const LOWERCASE = 219;
  if ( char === " ") return " ";
  else if( char.toUpperCase() === char ) return String.fromCharCode(UPPERCASE - char.charCodeAt());
  else if( char.toLowerCase() === char ) return String.fromCharCode(LOWERCASE - char.charCodeAt());
}

module.exports = problem4;

