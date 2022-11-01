const UPPER = 97;

const genCh = (ch) => {
  const lower = 155;
  const upper = 219;
  const code = ch.charCodeAt(0);
  let newCode;
  if (code < 65 || code > 122 || (code >= 91 && code < 97)) return ch;
  if (code >= UPPER) {
    newCode = String.fromCharCode(upper - code);
  } else {
    newCode = String.fromCharCode(lower - code);
  }
  return newCode;
};

function problem4(word) {
  let answer = "";
  for (let ch of word) {
    answer += genCh(ch);
  }
  return answer;
}

module.exports = problem4;
