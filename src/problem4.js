function problem4(word) {
  var answer = "";

  for (let i = 0; i < word.length; i++) {
      let lette = word.charCodeAt(i);
    if (lette >= 65 && lette <= 90) {
      lette = 65 + 90 - lette;
    }
    if (lette >= 97 && lette <= 122) {
      lette = 97 + 122 - lette;
    }
    answer += String.fromCharCode(lette);
  }

  return answer;
}

module.exports = problem4;