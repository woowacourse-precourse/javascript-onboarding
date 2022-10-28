function problem4(word) {
  var answer;
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let reverseCase = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let replaceWord = "";

  for (let i of word) {
    // i가 대문자인가.
    if (i === i.toUpperCase()) {
      // 청개구리 사전의 알파벳으로 치환 후 replaceWord에 담는다.
      let reChar = alphabet[reverseCase.indexOf(i)];
      replaceWord += i.replace(i, reChar);
    }

    if (i === i.toLowerCase()) {
    }
  }

  return answer;
}

module.exports = problem4;
