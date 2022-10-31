function problem4(word) {
  var answer = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      answer += " "
    } else if (word.charCodeAt(i) >= 97) {
      answer += String.fromCodePoint(65 + (122 - word.charCodeAt(i))).toLowerCase()
    } else if(word.charCodeAt(i) >= 65){
      answer += String.fromCodePoint(97 + (90 - word.charCodeAt(i))).toUpperCase()
    }
  }
  return answer;
}

module.exports = problem4;
