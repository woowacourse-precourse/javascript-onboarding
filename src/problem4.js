function problem4(word) {
  let answer = "";

  for (let i = 0; i < word.length; i++) {
    let leftEnd = 97;
    let rightEnd = 122;
    if (word[i] === " ") {
      answer = answer + " ";
      continue;
    }
    if (word[i] === word[i].toUpperCase()) {
      leftEnd = leftEnd - 32;
      rightEnd = rightEnd - 32;
    }

    let temp = rightEnd - (word[i].charCodeAt() - leftEnd);

    answer = answer + String.fromCharCode(temp);
  }

  return answer;
}
module.exports = problem4;
