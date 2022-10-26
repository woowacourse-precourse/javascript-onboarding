function problem4(word) {
  for (let index = 0; index < word.length; index++) {
    if (
      (word.charCodeAt(index) >= 97 && word.charCodeAt(index) <= 122) ||
      (word.charCodeAt(index) >= 65 && word.charCodeAt(index) <= 90)
    ) {
      console.log(word[index]);
    } else {
      console.log(word[index]);
    }
  }
}
module.exports = problem4;
