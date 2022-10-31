function problem2(cryptogram) {
  let answer;
  let overlap = 1;
  const letters = cryptogram.split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i + 1]) {
      overlap++;
    } else if (overlap >= 2) {
      cryptogram = cryptogram.replace(letters[i].repeat(overlap), '');
      overlap = 1;
    }
  }
  return answer;
}

module.exports = problem2;
