function problem4(word) {
  const answer = [];
  for (let char of word) {
    const ascii = char.charCodeAt(0);
    if (isUpper(ascii)) answer.push(String.fromCharCode(155 - ascii));
    else if (isLower(ascii)) answer.push(String.fromCharCode(219 - ascii));
    else answer.push(char);
  }
  return answer.join("");
}

function isUpper(ascii) {
  if (ascii >= 65 && ascii <= 90) return true;
  return false;
}

function isLower(ascii) {
  if (ascii <= 97 && ascii <= 122) return true;
  return false;
}
module.exports = problem4;
