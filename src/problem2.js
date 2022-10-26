function problem2(cryptogram) {
  let s = cryptogram;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s = s.slice(0, i) + s.slice(i + 2);

      if (i > 1) {
        i -= 2;
      }
    }
  }

  return s.length === 2 ? '' : s;
}

module.exports = problem2;
