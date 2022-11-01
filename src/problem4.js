function problem4(word) {
  var answer;

  function stringToInt(word) {
    let intAry = [];
    for (let i = 0; i < word.length; i++) {
      intAry[i] = word.charCodeAt(i);
    }
    return intAry;
  }
  
  let wordToIntAry = stringToInt(word);

  for (let i = 0; i < wordToIntAry.length; i++) {
    let intToChar = wordToIntAry[i];
    if (wordToIntAry[i] >= 97 && wordToIntAry[i] <= 122) {
      intToChar = 219 - wordToIntAry[i];
    }
    if (wordToIntAry[i] >= 65 && wordToIntAry[i] <= 90) {
      intToChar = 155 - wordToIntAry[i];
    }
    wordToIntAry[i] = String.fromCharCode(intToChar);
  }

  answer = wordToIntAry.join("");

  return answer;
}

module.exports = problem4;
