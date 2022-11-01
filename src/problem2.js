function problem2(cryptogram) {
  let str = cryptogram;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      str = str.replace(str[i] + str[i], '');
      i -= 2;
    }
  }
  return str;
}

module.exports = problem2;