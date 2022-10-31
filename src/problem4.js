function problem4(word) {
  const bigWords = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const reverseBigWords = bigWords.split("").reverse().join("");
  const smallWords = bigWords.toLowerCase();
  const reverseSmallWords = smallWords.split("").reverse().join("");

  let index;
  let result = new Array();

  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      //공백일 때
      result.push(" ");
    } else if (word[i] === word[i].toUpperCase()) {
      // 대문자일 때
      index = bigWords.indexOf(word[i]);
      result.push(reverseBigWords[index]);
    } else {
      //소문자일 때
      index = smallWords.indexOf(word[i]);
      result.push(reverseSmallWords[index]);
    }
  }

  return result.join("");
}

problem4("I love you");

module.exports = problem4;
