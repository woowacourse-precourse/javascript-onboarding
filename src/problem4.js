function problem4(word) {
  var answer = "";
  for (let i = 0; i < word.length; i++) {
    let txt = word[i].charCodeAt();
    if (txt >= 65 && txt <= 90)
      answer += String.fromCharCode(txt - (txt - 65) - (txt - 90));
    else if (txt >= 97 && txt <= 122)
      answer += String.fromCharCode(txt - (txt - 97) - (txt - 122));
    else answer += word[i];
  }
  return answer;
}

module.exports = problem4;
