function problem4(word) {
  return word
    .split("")
    .map((ch) => {
      let isUpper = 0;
      if (/[A-Z]/.test(ch)) isUpper = 1;
      else if (!/[A-Za-z]/.test(ch)) return ch;
    })
}

module.exports = problem4;
