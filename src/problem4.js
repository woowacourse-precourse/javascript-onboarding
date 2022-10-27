function problem4(word) {
  let frogDictUpper = {};
  let frogDictLower = {};

  // 청개구리 사전 만들기
  for (let i = 0; i < 26; i++) {
    frogDictUpper[String.fromCharCode(i + 65)] = String.fromCharCode(90 - i)
    frogDictLower[String.fromCharCode(i + 97)] = String.fromCharCode(122 - i)
  }
  String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
  for (let i = 0; i < word.length; i++) {
    if ((97 <= word.charCodeAt(i)) && (word.charCodeAt(i) <= 122)) {
      word = word.replaceAt(i, frogDictLower[word[i]]);
    } else if ((65 <= word.charCodeAt(i)) && (word.charCodeAt(i) <= 90)) {
      word = word.replaceAt(i, frogDictUpper[word[i]]);
    } else {
      continue;
    }
  }
  
  let answer = word
  return answer;
}

module.exports = problem4;

console.log(problem4("I love you"));