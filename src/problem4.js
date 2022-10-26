function problem4(word) {
  // A-Z 65-90
  // a-z 97-122
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    let val = word.charCodeAt(i);
    if (val >= 65 && val <= 90) {
      answer += String.fromCharCode(155 - val);
    } else if (val >= 97 && val <= 122) {
      answer += String.fromCharCode(219 - val);
    } else {
      answer += word[i];
    }
  }
  return answer;
}

module.exports = problem4;
