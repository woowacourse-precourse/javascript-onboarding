function problem2(cryptogram) {
  var answer;

  let remove = [];

  while (check(cryptogram)) {
    for (let i = 0; i < cryptogram.length; i++) {
      if (cryptogram[i] === cryptogram[i + 1]) {
        remove.push(cryptogram[i] + cryptogram[i + 1]);
      }
    }
    for (let i = 0; i < remove.length; i++) {
      cryptogram = cryptogram.replace(remove[i], "");
    }
    answer = cryptogram;
  }

  function check(word) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i + 1]) {
        return true;
      }
    }
    return false;
  }

  return answer;
}

module.exports = problem2;
