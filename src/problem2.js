function problem2(cryptogram) {
  let arr = [cryptogram[0]];
  let i = 0;
  while (i++ < cryptogram.length) {
    if (arr[arr.length - 1] === cryptogram[i]) {
      arr.pop();
    } else {
      arr.push(cryptogram[i]);
    }
  }
  arr.pop();
  return arr.join("");
}

module.exports = problem2;
