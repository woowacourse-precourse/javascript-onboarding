function problem4(word) {
  var answer = "";

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
        let unicode = 155 - word[i].charCodeAt();
        changedWord += String.fromCharCode(unicode);
        continue;
      }
      if (isLowerCase(word[i])) {
        let unicode = 219 - word[i].charCodeAt();
        changedWord += String.fromCharCode(unicode);
        continue;
      }
      changedWord += word[i];
    }
    return changedWord;
  };

  answer = changeWord(word);
  return answer;
}

module.exports = problem4;
