function problem2(cryptogram) {
  var answer;
  let cryptoAry = cryptogram.split("");

  for (let i = 0; i < cryptoAry.length; i++) {
    if (cryptoAry[i] === cryptoAry[i - 1]) {
      cryptoAry.splice(i - 1, 2);
      i = 0;
    }
  }
  answer = cryptoAry.join("");
  return answer;
}

module.exports = problem2;
