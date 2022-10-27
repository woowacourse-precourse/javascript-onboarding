function problem4(word) {
  let answer;

  answer = "";
  for (let i = 0; i < word.length; i++) {
    const character = word[i]
    if ('A' <= character && character <= 'Z') {
      answer += String.fromCharCode(65 + 90 - character.charCodeAt());
    } else if ('a' <= character && character <= 'z') {
      answer += String.fromCharCode(97 + 122 - character.charCodeAt());
    } else {
      answer += character;
    }
  }
  return answer;
}

module.exports = problem4;
