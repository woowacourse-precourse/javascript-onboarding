function problem4(word) {
  let answer = "";

  let alpha = new Map();

  for (let i = 97; i <= 122; i++) {
    alpha.set(String.fromCharCode(i), String.fromCharCode(219 - i));
    alpha.set(String.fromCharCode(i - 32), String.fromCharCode(187 - i));
  }

  [...word].forEach((x) => {
    if (alpha.has(x)) {
      answer += alpha.get(x);
    } else {
      answer += x;
    }
  });

  return answer;
}

module.exports = problem4;
