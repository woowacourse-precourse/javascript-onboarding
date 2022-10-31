const aCharCodeAt = "a".charCodeAt(0);
const zCharCodeAt = "z".charCodeAt(0);
const ACharCodeAt = "A".charCodeAt(0);
const ZCharCodeAt = "Z".charCodeAt(0);
const lowercase = aCharCodeAt + zCharCodeAt;
const uppercase = ACharCodeAt + ZCharCodeAt;

function problem4(word) {
  let answer = "";
  for (let char of word) {
    if (char === " ") {
      answer += " ";
      continue;
    }
    const asci = char.charCodeAt(0);
    const code = aCharCodeAt <= asci ? lowercase - asci : uppercase - asci;
    answer += String.fromCharCode(code);
  }
  return answer;
}

module.exports = problem4;
