function problem2(cryptogram) {
  const arr = cryptogram.split("");
  const ret = [""];
  let l = 0;
  let lastChar = "";
  arr.forEach((c) => {
    if (c === ret[l]) {
      ret.pop();
      l--;
    } else if (c === lastChar) {
    } else {
      ret.push(c);
      lastChar = c;
      l++;
    }
  });
  return ret.join("");
}

module.exports = problem2;
