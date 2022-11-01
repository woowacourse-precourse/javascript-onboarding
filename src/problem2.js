function problem2(cryptogram) {
  if (cryptogram.length > 0 && cryptogram.length < 1001 && typeof cryptogram === "string" && cryptogram === cryptogram.toLowerCase()) {
          let answer = cryptogram;

    return answer;
  }
}

module.exports = problem2;