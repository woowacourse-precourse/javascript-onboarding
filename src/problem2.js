function problem2(cryptogram) {
  const letters = {};

  [...cryptogram].forEach(alpa => (letters[alpa] = letters[alpa] ? letters[alpa] + 1 : 1));

  const answer = Object.keys(letters).map(key => {
    const isOdd = letters[key] % 2 !== 0;
    if (isOdd) return key;
  });

  return answer.join('');
}

module.exports = problem2;
