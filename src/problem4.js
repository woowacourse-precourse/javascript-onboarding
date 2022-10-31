function problem4(word) {
  let str = "";
  for (let index = 0; index < word.length; index++) {
    const wordUnicode = word.charCodeAt(index);
    if (wordUnicode >= 97 && wordUnicode <= 122) {
      str += String.fromCharCode(25 - (wordUnicode - 97) + 97);
    } else if (wordUnicode >= 65 && wordUnicode <= 90) {
      str += String.fromCharCode(25 - (wordUnicode - 65) + 65);
    } else {
      str += word[index];
    }
  }
  return str;
}
module.exports = problem4;
