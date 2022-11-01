const aCharCodeAt = "a".charCodeAt(0);
const zCharCodeAt = "z".charCodeAt(0);
const ACharCodeAt = "A".charCodeAt(0);
const ZCharCodeAt = "Z".charCodeAt(0);
const lowercase = aCharCodeAt + zCharCodeAt;
const uppercase = ACharCodeAt + ZCharCodeAt;

function problem4(word) {
  let answer = "";
  for (let char of word) {
    const charCode = greenFrogCharcode(char);
    answer += String.fromCharCode(charCode);
  }
  return answer;
}

function greenFrogCharcode(char) {
  const charCode = char.charCodeAt(0);
  if (aCharCodeAt <= charCode && charCode <= zCharCodeAt) {
    return lowercase - charCode;
  }
  if (ACharCodeAt <= charCode && charCode <= ZCharCodeAt) {
    return uppercase - charCode;
  }
  return charCode;
}

module.exports = problem4;
