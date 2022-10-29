function upperChange(ascii) {
  const changeAscii = ascii < 78 ? 2 * (77 - ascii) +1 : 2 * (78 - ascii) + 1;
  
  return ascii + changeAscii;
}

function getChangedWord(word) {
  const wordArr = Array.from(word,(el) => el.charCodeAt());

}

function problem4(word) {
  // var answer;
  getChangedWord(word)
  // return answer;
}

module.exports = problem4;
