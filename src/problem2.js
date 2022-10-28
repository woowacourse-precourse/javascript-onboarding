function problem2(cryptogram) {
  let s = decode(cryptogram);
  while (cryptogram != s) {
    cryptogram = s;
    s = decode(cryptogram);
  }
  return cryptogram;
}

function decode(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) return s.slice(0, i) + s.slice(i + 2);
  }
  return s;
}

module.exports = problem2;
