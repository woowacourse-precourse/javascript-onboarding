function problem4(word) {
  var answer = "";

  // A ~ Z : 65 ~ 90,  a ~ z : 97 ~ 122
  for (let i = 0; i < word.length; i++) {
    let char = word.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      char = 65 + 90 - char;
    }
    if (char >= 97 && char <= 122) {
      char = 97 + 122 - char;
    }
    answer += String.fromCharCode(char);
  }

  return answer;
}

module.exports = problem4;
