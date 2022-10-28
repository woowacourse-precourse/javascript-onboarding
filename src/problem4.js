function problem4(word) {
  let wordArr = [...word];
  let answer = "";
  for (let word of wordArr) {
    let asciiWord = word.charCodeAt();
    if (asciiWord >= 65 && asciiWord <= 90)
      answer += String.fromCharCode(155 - asciiWord);
    else if (asciiWord >= 97 && asciiWord <= 122)
      answer += String.fromCharCode(219 - asciiWord);
    else answer += word;
  }
  return answer;
}
module.exports = problem4;
