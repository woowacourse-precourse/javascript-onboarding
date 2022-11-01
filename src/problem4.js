function reverseWord(char) {
  const upperArr = Array.from({ length : 26 }, (v, i) => String.fromCharCode(i + 65));
  const lowerArr  = Array.from({ length : 26 }, (v, i) => String.fromCharCode(i + 97));
  const reverseUpper = [...upperArr].reverse();
  const reverseLower = [...lowerArr].reverse();
  const upperIndex = upperArr.indexOf(char);
  const lowerIndex = lowerArr.indexOf(char);

  if (char === " ") {
    return char;
  } else if (char === char.toLowerCase()) {
    return reverseLower[lowerIndex];
  } else if (char === char.toUpperCase()) {
    return reverseUpper[upperIndex];
  }
}

function problem4(word) {
  const strArr = [...word];
  const reverse = strArr.map((char) => reverseWord(char));

  return reverse.join("");
}

module.exports = problem4;
