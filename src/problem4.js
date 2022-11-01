function problem4(word) {
  let answer = [];
  let i = 0;

  while (word.length >= 1 && word.length <= 1000 && typeof word === "string") {
    for (; i < word.length; i++) {
      if (word[i] === /\s/) {
        answer.push(/\s/);
      } else if (/[A-Z]/.test(word[i])) {
        let uppercaseCharCode = 90 - (word.charCodeAt(i) - 65);
        answer.push(String.fromCharCode(uppercaseCharCode));
      } else if (/[a-z]/.test(word[i])) {
        let lowercaseCharCode = 122 - (word.charCodeAt(i) - 97);
        answer.push(String.fromCharCode(lowercaseCharCode));
      } else {
        answer.push(word[i]);
      }
    }
    return answer.join("");
  }
}

module.exports = problem4;
