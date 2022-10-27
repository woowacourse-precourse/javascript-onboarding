function problem4(word) {
  let result = [];
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const frog = [...'zyxwvutsrqponmlkjihgfedcba'];

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (word[i].toLowerCase() === alphabet[j]) {
        result.push(frog[j]);
      }
    }
  }
  return result.join('');
}

module.exports = problem4;
