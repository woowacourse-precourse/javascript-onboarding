function problem4(word) {
  return word
    .split("")
    .map((ch) => {
      let isUpper = 0;
      if (/[A-Z]/.test(ch)) isUpper = 1;
      else if (!/[A-Za-z]/.test(ch)) return ch;

      const ascii = ch.toUpperCase().charCodeAt() - 65;
    })
}

module.exports = problem4;
