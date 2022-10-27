function problem4(word) {
  const isUpperCase = (word) => {
    return word.charCodeAt() >= 65 && word.charCodeAt() <= 90;
  };

  const isLowerCase = (word) => {
    return word.charCodeAt() >= 97 && word.charCodeAt() <= 122;
  };

  const changeWord = (word) => {
    let changedWord = "";
    for (let i = 0; i < word.length; i++) {
      if (isUpperCase(word[i])) {
        changedWord += String.fromCharCode(155 - word[i].charCodeAt());
        continue;
      }
      if (isLowerCase(word[i])) {
        changedWord += String.fromCharCode(219 - word[i].charCodeAt());
        continue;
      }
      changedWord += word[i];
    }
    return changedWord;
  };
  return changeWord(word);
}

module.exports = problem4;
