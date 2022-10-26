/**
 * 
 * @param {char} char 
 * @returns {char} reversed character
 */
function getReversedChar(char) {
  const ascii = char.charCodeAt(0);
  if (ascii >= 97)
    return String.fromCharCode(97 + 97 + 25 - ascii);
  return String.fromCharCode(65 + 65 + 25 - ascii);
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
