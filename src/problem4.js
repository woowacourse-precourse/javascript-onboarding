function problem4(word) {
  const answer = [];
  word.split("").forEach((char) => {
    if (!isAlphabet(char)) answer.push(char);
    else if (isUpperCase(char)) answer.push(getUpperReverseWord(char));
    else if (isLowerCase(char)) answer.push(getLowerReverseWord(char));
  });
  return answer.join("");
}

function getUpperReverseWord(char) {
  return String.fromCharCode(
    Math.abs(char.charCodeAt() - "Z".charCodeAt()) + "A".charCodeAt()
  );
}

function getLowerReverseWord(char) {
  return String.fromCharCode(
    Math.abs(char.charCodeAt() - "z".charCodeAt()) + "a".charCodeAt()
  );
}

function isUpperCase(char) {
  const ascii = char.charCodeAt();
  if (ascii >= 65 && ascii <= 90) return true;
  return false;
}

function isLowerCase(char) {
  const ascii = char.charCodeAt();
  if (ascii >= 97 && ascii <= 122) return true;
  return false;
}

function isAlphabet(char) {
  if (isUpperCase(char) || isLowerCase(char)) return true;
  return false;
}

module.exports = problem4;
