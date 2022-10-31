const ASCIICODE = {
  UPPERCASE_A: 65,
  UPPERCASE_Z: 90,
  LOWERCASE_A: 97,
  LOWERCASE_Z: 122
}

Object.freeze(ASCIICODE);

function convertTextFroggy(word) {
  const { UPPERCASE_A, UPPERCASE_Z, LOWERCASE_A, LOWERCASE_Z } = ASCIICODE;
  let asciiNumberList = [];

  for(let i = 0; i < word.length; i++) {
    const asciiNumber = word.charCodeAt(i);

    if(asciiNumber >= UPPERCASE_A && asciiNumber <= UPPERCASE_Z) {
      asciiNumberList.push(UPPERCASE_Z - asciiNumber%UPPERCASE_A);
    }
    else if(asciiNumber >= LOWERCASE_A && asciiNumber <= LOWERCASE_Z) {
      asciiNumberList.push(LOWERCASE_Z - asciiNumber%LOWERCASE_A);
    }
    else {
      asciiNumberList.push(asciiNumber);
    }
  }

  return String.fromCharCode(...asciiNumberList);
}


function problem4(word) {
  const answer = convertTextFroggy(word);

  return answer;
}

module.exports = problem4;
