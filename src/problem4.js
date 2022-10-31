function problem4(word) {
  let answer = "";
  let wordArr = [...word];

  for (let i = 0; i < wordArr.length; i++) {
    if (
      wordArr[i].charCodeAt() >= 65 &&
      wordArr[i].charCodeAt() <= 90 &&
      wordArr[i] == wordArr[i].toUpperCase()
    ) {
      wordArr[i] = String.fromCharCode(90 - (wordArr[i].charCodeAt() - 65));
    }
    if (
      wordArr[i].charCodeAt() >= 97 &&
      wordArr[i].charCodeAt() <= 122 &&
      wordArr[i] == wordArr[i].toLowerCase()
    ) {
      wordArr[i] = String.fromCharCode(122 - (wordArr[i].charCodeAt() - 97));
    }
  }

  answer = wordArr.join("");
  return answer;
}
module.exports = problem4;
