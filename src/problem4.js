function problem4(word) {
  let result = [];
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const frog = [...'zyxwvutsrqponmlkjihgfedcba'];

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (word.charCodeAt(i) < 91 && word[i].toLowerCase() === alphabet[j]) {
        result.push(frog[j].toUpperCase());
      } else if (word[i].toLowerCase() === alphabet[j]) {
        result.push(frog[j]);
      }
    }
    if (word[i] === ' ') {
      result.push(' ');
    }
  }
  return result.join('');
}

module.exports = problem4;
