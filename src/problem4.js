function problem4(word) {
  return replaceWord(word);
}

const replaceWord = (word) => {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    let asciiCode = word.charCodeAt(i);
    if (65 <= asciiCode && asciiCode <= 90) {
      asciiCode = 65 + 90 - asciiCode;
    } else if (97 <= asciiCode && asciiCode <= 122) {
      asciiCode = 97 + 122 - asciiCode;
    }
    result.push(String.fromCharCode(asciiCode));
  }
  return result.join('');
};

module.exports = problem4;
