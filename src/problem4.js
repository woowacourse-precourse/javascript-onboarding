function problem4(word) {
  let answer = '';

  for (let e of word) {
    if (e >= 'a' && e <= 'z') {
      let ascii = 'z'.charCodeAt() - (e.charCodeAt() - 'a'.charCodeAt());
      answer += String.fromCharCode(ascii);
    } else if (e >= 'A' && e <= 'Z') {
      let ascii = 'Z'.charCodeAt() - (e.charCodeAt() - 'A'.charCodeAt());
      answer += String.fromCharCode(ascii);
    } else {
      answer += e;
    }
  }

  return answer;
}

module.exports = problem4;