function problem4(word) {
  let answer = [];
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabets = str.split("");
  const reverseAlphabet = alphabets.slice().reverse();

  for (let i = 0; i < word.length; i++) {
    let index = "";
    // 대문자일때
    if (alphabets.indexOf(word[i]) > -1) {
      index = alphabets.indexOf(word[i]);
      answer.push(reverseAlphabet[index]);
    } else if (alphabets.indexOf(word[i].toUpperCase()) > -1) {
      // 소문자일때
      index = alphabets.indexOf(word[i].toUpperCase());
      answer.push(reverseAlphabet[index].toLowerCase());
    } else {
      // 알파벳 외 다른 문자일 때
      answer.push(word[i]);
    }
  }

  return answer.join("");
}

module.exports = problem4;
