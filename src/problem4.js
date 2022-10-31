function isUpperCase(c) {
  if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)
    return true;
  else
    return false;
}
function isLowerCase(c) {
  if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90)
    return true;
  else
    return false;
}

function problem4(word) {
  var answer;
  answer = '';
  word = [...word];
  word.forEach(char => {
    if (isUpperCase(char)) {
      answer += String.fromCharCode(219 - char.charCodeAt(0));
    } else if (isLowerCase(char)) {
      answer += String.fromCharCode(155 - char.charCodeAt(0));
    } else {
      answer += char;
    }
  });
  return answer;
}

module.exports = problem4;
