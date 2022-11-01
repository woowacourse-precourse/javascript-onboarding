function upperCaseDeal(chr) {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperCaseReverse = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  return upperCaseReverse[upperCase.indexOf(chr)];
}

function lowerCaseDeal(chr) {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let lowerCaseReverse = "zyxwvutsrqponmlkjihgfedcba";
  return lowerCaseReverse[lowerCase.indexOf(chr)];
}

function isAlpha(chr) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (alphabet.indexOf(chr) == -1)
    return false;
  return true;
}

function changeWords(word) {
  let changedWord = "";

  for (let i = 0; i < word.length; i++) {
    if (isAlpha(word[i]) == false) {
      changedWord += word[i];
      continue;
    }
    if (word[i] == word[i].toUpperCase()) {
      changedWord += upperCaseDeal(word[i]);
      continue;
    }
    if (word[i] == word[i].toLowerCase()) {
      changedWord += lowerCaseDeal(word[i]);
      continue;
    }
  }
  return changedWord;
}

function problem4(word) {
  let answer = changeWords(word);
  console.log(answer);
  return answer;
}

module.exports = problem4;
