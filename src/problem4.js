function changeWords(word) {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperCaseReverse = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let lowerCaseReverse = "zyxwvutsrqponmlkjihgfedcba";
  let reverseWord = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase())
      reverseWord += upperCaseReverse[upperCase.indexOf(word[i])];
    else if (word[i] == word[i].toLowerCase())
      reverseWord += lowerCaseReverse[lowerCase.indexOf(word[i])];
    else
      reverseWord += word[i];
  }
  return reverseWord;
}

function problem4(word) {
  let answer = changeWords(word);
  return answer;
}

module.exports = problem4;
