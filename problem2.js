function problem2(cryptogram) {
  var answer;
  answer = removeDup(cryptogram);
  return answer.join("");
}

module.exports = problem2;

function removeDup(word) {
  const code = word.split("");
  for (let i = 0; i < code.length; i++) {
    if (code[i] === code[i + 1]) {
      code.splice(i, 2);
    }
  }
  return code;
}
