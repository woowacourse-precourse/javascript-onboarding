function problem4(word) {
  let answer = "";
  // Use the ASCII codes.
  for (let i = 0; i < word.length; ++i) {
    // The sum of two ascii code is constant
    if ("A" <= word[i] && word[i] <= "Z") {
      // A + Z = B + Y = ... =155
      answer += String.fromCharCode(155 - word[i].charCodeAt(0));
    } else if ("a" <= word[i] && word[i] <= "z") {
      // a + z = b + y = ... = 219
      answer += String.fromCharCode(219 - word[i].charCodeAt(0));
    } else {
      // This word is not an alphabet
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;
