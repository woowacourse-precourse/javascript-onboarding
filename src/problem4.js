function problem4(word) {
  const UPPERCASE = 155;
  const LOWERCASE = 219;
  let answer = "";

  for(let x of word) {
    if ( x === " ") answer += " "
    else if( x.toUpperCase() === x ) answer+= String.fromCharCode(UPPERCASE - x.charCodeAt());
    else if( x.toLowerCase() === x ) answer+= String.fromCharCode(LOWERCASE - x.charCodeAt());
  }

  return answer;
}

module.exports = problem4;

