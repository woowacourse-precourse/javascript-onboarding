function problem4(word) {
  var answer;
  return answer;
}

function getTreeFrogWord(word) {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if ("A" <= word[i] && word[i] <= "Z") {
      result += String.fromCharCode(65 + 26 - (word.charCodeAt(i) - 65 + 1));
    } else if ("a" <= word[i] && word[i] <= "z") {
      result += String.fromCharCode(97 + 26 - (word.charCodeAt(i) - 97 + 1));
    } else {
      result += word[i];
    }
  }
  return result;
}

module.exports = problem4;
