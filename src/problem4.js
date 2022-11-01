const aCharCodeAt = "a".charCodeAt(0);
const zCharCodeAt = "z".charCodeAt(0);
const ACharCodeAt = "A".charCodeAt(0);
const ZCharCodeAt = "Z".charCodeAt(0);
const lowercase = aCharCodeAt + zCharCodeAt;
const uppercase = ACharCodeAt + ZCharCodeAt;

function problem4(word) {
  const greenFrogWordList = [];
  for (let char of word) {
    const charCode = greenFrogCharcode(char);
    greenFrogWordList.push(String.fromCharCode(charCode));
  }
  const greenFrogWord = greenFrogWordList.join("");
  return greenFrogWord;
}

function greenFrogCharcode(char) {
  const charCode = char.charCodeAt(0);
  if (isLowerCase(charCode)) {
    return lowercase - charCode;
  }
  if (isUpperCase(charCode)) {
    return uppercase - charCode;
  }
  return charCode;
}

function isLowerCase(number) {
  return aCharCodeAt <= number && number <= zCharCodeAt;
}

function isUpperCase(number) {
  return ACharCodeAt <= number && number <= ZCharCodeAt;
}

module.exports = problem4;
