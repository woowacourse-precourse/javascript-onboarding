function problem2(cryptogram) {
  if (cryptogram.length > 0 && cryptogram.length < 1001 && typeof cryptogram === "string" && cryptogram === cryptogram.toLowerCase()) {
          let answer = cryptogram;

  while (/([a-z])\1/.test(answer) == true) {
    answer = answer.replace(/([a-z])\1/, "");
  }
    return answer;
  }
}

module.exports = problem2;