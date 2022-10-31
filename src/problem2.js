function problem2(cryptogram) {
  let result = cryptogram.split("");
  for (let i = 0; i < result.length; i++) {
    if (result[i] == result[i + 1]) {
      result.splice(i, 2);
      i = 0;
      if (result.length <= 2) {
        i = 0;
        result.splice(i, 2);
      }
    }
  }

  var answer = result.join("");
  return answer;
}

module.exports = problem2;
