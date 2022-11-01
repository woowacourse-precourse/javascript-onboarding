function problem4(word) {
  let answer = "";

  for (let x of word) {
    if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 77) {
      answer += String.fromCharCode(155 - x.charCodeAt(0));
    } else if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 109) {
      answer += String.fromCharCode(219 - x.charCodeAt(0));
    } else if (x.charCodeAt(0) >= 78 && x.charCodeAt(0) <= 90) {
      answer += String.fromCharCode(155 - x.charCodeAt(0));
    } else if (x.charCodeAt(0) >= 110 && x.charCodeAt(0) <= 122) {
      answer += String.fromCharCode(219 - x.charCodeAt(0));
    } else {
      answer += x;
    }
  }
  return answer;
}

module.exports = problem4;
