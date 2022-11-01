function problem4(word) {
  var answer = "";

  convertToCodePoint(word);

  function convertToCodePoint(word) {
    for (let i = 0; i < word.length; i++) {
      let point = word.charCodeAt(i);
      checkPointSize(point, word[i]);
    }
  }

  function checkPointSize(codePoint, character) {
    if (codePoint >= 65 && codePoint <= 90) {
      convertToLowerCase(codePoint);
    } else if (codePoint >= 97 && codePoint <= 122) {
      convertToUpperCase(codePoint);
    } else addOtherCharacter(character);
  }

  function convertToLowerCase(codePoint) {
    let convertPoint = 155 - codePoint;
    answer += String.fromCharCode(convertPoint);
  }

  function convertToUpperCase(codePoint) {
    let convertPoint = 219 - codePoint;
    answer += String.fromCharCode(convertPoint);
  }

  function addOtherCharacter(character) {
    answer += character;
  }

  return answer;
}

module.exports = problem4;
