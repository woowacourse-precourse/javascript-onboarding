function problem4(word) {
  var answer;
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let reverseCase = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let replaceWord = "";

  for (let i of word) {
    // i가 공백인가.
    if (i === " ") {
      replaceWord += " ";
    } else if (i === i.toUpperCase()) {
      // i가 대문자인가, 청개구리 사전의 알파벳으로 치환 후 replaceWord에 담는다.
      let reChar = alphabet[reverseCase.indexOf(i)];
      replaceWord += i.replace(i, reChar);
    } else if (i === i.toLowerCase()) {
      // i가 소문자인가, 청개구리 사전의 알파벳으로 치환 후 replaceWord에 담는다.
      let reChar = alphabet[reverseCase.indexOf(i.toUpperCase())].toLowerCase();
      replaceWord += i.replace(i, reChar);
    }
  }

  answer = replaceWord;
  return answer;
}

module.exports = problem4;
