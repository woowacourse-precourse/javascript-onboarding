function problem2(cryptogram) {
  var answer;
  cryptogram = cryptogram.split("");
  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      cryptogram.splice(i, 2);
      console.log(i, cryptogram, cryptogram.length);
      i = -1;
    }
  }
  answer = cryptogram.join("");
  return answer;
}

module.exports = problem2;
