function problem4(word) {
  var answer = changeWord(word);
  return answer;
}

const changeWord = (word) => {
  let result = [];
  for (let i = 0, wordLen = word.length; i < wordLen; i++) {
    let unicode = word.charCodeAt(i);

    if (65 <= unicode && unicode <= 90) {
      unicode = 65 + 90 - unicode;
    } else if (97 <= unicode && unicode <= 122) {
      unicode = 97 + 122 - unicode;
    }
    result[i] = String.fromCharCode(unicode);
  }
  return result.join("");
};

module.exports = problem4;
