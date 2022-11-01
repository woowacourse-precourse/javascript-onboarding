function problem4(word) {
  let answer = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) > 54 && word.charCodeAt(i) < 91) {
      answer.push(changeUpperCase(word[i]));
      continue;
    }
    if (word.charCodeAt(i) > 96 && word.charCodeAt(i) < 123) {
      answer.push(changeLowerCase(word[i]));
      continue;
    }
    answer.push(word[i]);
  }
  return answer.join("");
}
function changeLowerCase(alphabet) {
  return String.fromCharCode(219 - alphabet.charCodeAt(0));
}
function changeUpperCase(alphabet) {
  return String.fromCharCode(155 - alphabet.charCodeAt(0));
}
module.exports = problem4;
