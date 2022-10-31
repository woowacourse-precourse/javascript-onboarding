function problem4(word) {
  let answer;
  const LOWER = 'a'.charCodeAt(0) + 'z'.charCodeAt(0);
  const UPPER = 'A'.charCodeAt(0) + 'Z'.charCodeAt(0);
  const isLower = /[a-z]/;
  const isUpper = /[A-Z]/;
  const result = [];

  for (const w of word) {
    if (isLower.test(w)) {
      result.push(LOWER - w.charCodeAt(0));
    } else if (isUpper.test(w)) {
      result.push(UPPER - w.charCodeAt(0));
    } else {
      result.push(w.charCodeAt(0));
    }
  }

  answer = String.fromCharCode(...result);

  return answer;
}

module.exports = problem4;
