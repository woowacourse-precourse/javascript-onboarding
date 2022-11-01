function check(word) {
  if (word.charCodeAt() >= 97 && word.charCodeAt() <= 122) {
    return "lowerCase";
  }
  if (word.charCodeAt() >= 65 && word.charCodeAt() <= 90) {
    return "upperCase";
  }
}

function problem4(word) {
  let answer = "";
  word = [...word];

  word.forEach((v) => {
    if (check(v) === "lowerCase") {
      answer += String.fromCharCode(219 - v.charCodeAt());
    } else if (check(v) === "upperCase") {
      answer += String.fromCharCode(155 - v.charCodeAt());
    } else {
      answer += v;
    }
  });

  return answer;
}

module.exports = problem4;
