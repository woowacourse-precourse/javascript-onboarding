function problem2(cryptogram) {
  let result = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    if (result[result.length - 1] === cryptogram[i]) {
      result.pop();
    } else {
      result.push(cryptogram[i]);
    }
  }
  return result.join("");
}
module.exports = problem2;
