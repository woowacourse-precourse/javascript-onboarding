function problem2(cryptogram) {
  const arr = cryptogram.split("");
  const ret = [""];
  let l = 0;
  arr.forEach((c) => {
    if (c === ret[l]) {
      ret.pop();
      l--;
    } else {
      ret.push(c);
      l++;
    }
  });
  return ret.join("");
}

module.exports = problem2;
