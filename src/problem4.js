function problem4(word) {
  let str = "";
  for (let index = 0; index < word.length; index++) {
    if (word.charCodeAt(index) >= 97 && word.charCodeAt(index) <= 122) {
      str += String.fromCharCode(25 - (word.charCodeAt(index) - 97) + 97);
    } else if (word.charCodeAt(index) >= 65 && word.charCodeAt(index) <= 90) {
      str += String.fromCharCode(25 - (word.charCodeAt(index) - 65) + 65);
    } else {
      str += word[index];
    }
  }
  return str;
}
module.exports = problem4;
