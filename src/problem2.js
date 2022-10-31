function problem2(cryptogram) {
  const check = (word) => {
    let before = '';
    for (const el of word) {
      if (el == before) return true;
      else before = el;
    }
  };

  let checkWord = cryptogram;

  while (check(checkWord)) {
    let answer = [];
    let before = '';
    for (const el of checkWord.split('')) {
      if (el == before) {
        answer.pop();
        continue;
      } else {
        answer.push(el);
        before = el;
      }
    }
    checkWord = answer.join('');
  }

  return checkWord;
}

module.exports = problem2;
