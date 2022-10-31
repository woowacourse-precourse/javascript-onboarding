function problem4(word) {
  const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
  const reverseAlphabet =
    'ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa';

  const answer = [];
  for (let i = 0; i < word.length; i++) {
    const el = word[i];
    const idx = alphabet.indexOf(el);
    if (idx < 0) answer.push(' ');
    else answer.push(reverseAlphabet[idx]);
  }

  return answer.join('');
}

module.exports = problem4;
