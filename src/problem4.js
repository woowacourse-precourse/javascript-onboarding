function problem4(word) {
  const ASCII_A = 65;
  const ASCII_Z = 90;
  const ASCII_a = 97;
  const ASCII_z = 122;
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    let val = word.charCodeAt(i);
    if (val >= ASCII_A && val <= ASCII_Z) {
      answer += String.fromCharCode(155 - val);
    } else if (val >= ASCII_a && val <= ASCII_z) {
      answer += String.fromCharCode(219 - val);
    } else {
      answer += word[i];
    }
  }
  return answer;
}

module.exports = problem4;
