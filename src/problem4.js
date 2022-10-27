function problem4(word) {
  if (validateWord(word)) {
    return replaceWord(word);
  }
  return -1;
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

const validateWord = (word) => {
  if (typeof word !== 'string') {
    return false;
  }
  if (word.length === 0 || word.length > 1000) {
    return false;
  }
  return true;
};

module.exports = problem4;
