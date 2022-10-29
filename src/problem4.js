function problem4(word) {
  let answer = "";

  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const upperReversed = upperAlphabet.split("").reverse();
  const lowerAlphabet = upperAlphabet.toLowerCase();
  const lowerReversed = lowerAlphabet.split("").reverse();

  for (let i = 0; i < word.length; i++) {
    if (upperAlphabet.includes(word[i])) {
      answer += upperReversed[upperAlphabet.indexOf(word[i])];
    } else if (lowerAlphabet.includes(word[i])) {
      answer += lowerReversed[lowerAlphabet.indexOf(word[i])];
    } else {
      answer += " ";
    }
  }

  return;
}

module.exports = problem4;
