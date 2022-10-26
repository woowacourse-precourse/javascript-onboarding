function problem4(word) {
  const wordMap = getWordMap();

  let encoded = '';
  word.split('').forEach((key) => {
    encoded += wordMap[key];
  });

  return encoded;
}

function getWordMap() {
  let wordMap = {' ': ' '};
  for (let i = 65; i <= 90; i++) {
    const key = String.fromCharCode(i);
    const value = String.fromCharCode(90 + 65 - i);
    wordMap[key] = value;
  }
  for (let i = 97; i <= 122; i++) {
    const key = String.fromCharCode(i);
    const value = String.fromCharCode(122 + 97 - i);
    wordMap[key] = value;
  }
  return wordMap;
}

module.exports = problem4;
