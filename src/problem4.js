function errorHandling(word) {
  if (word.length < 1 || word.length > 1000) return false;
  return true;
}
function change(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let tmp = word.charCodeAt(i);
    let number = 0;
    if (tmp >= 65 && tmp <= 90) {
      number = tmp - 65;
      tmp = 90 - number;
      result += String.fromCharCode(tmp);
    } else if (tmp >= 97 && tmp <= 122) {
      number = tmp - 97;
      tmp = 122 - number;
      result += String.fromCharCode(tmp);
    } else result += word[i];
  }
  return result;
}
function problem4(word) {
  if (!errorHandling(word)) return -1;
  let answer = change(word);
  return answer;
}
module.exports = problem4;
