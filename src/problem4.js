function problem4(word) {
  let frogDictUpper = {};
  let frogDictLower = {};
  for (let i = 0; i < 26; i++) {
    frogDictUpper[String.fromCharCode(i + 65)] = String.fromCharCode(90 - i)
    frogDictLower[String.fromCharCode(i + 97)] = String.fromCharCode(122 - i)
  }

  let answer;
  return answer;
}

module.exports = problem4;

console.log(problem4("I love you"));