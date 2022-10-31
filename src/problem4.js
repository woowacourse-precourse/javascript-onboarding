function problem4(word) {
  let answer;
  let splitWord = word.split("");

  answer = splitWord.map((element) => {
    if (65 <= element.charCodeAt() && element.charCodeAt() <= 90) {
      return String.fromCharCode(90 - element.charCodeAt() + 65);
    } else if (97 <= element.charCodeAt() && element.charCodeAt() <= 122) {
      return String.fromCharCode(122 - element.charCodeAt() + 97);
    } else return element;
  });
  answer = answer.join("");

  return answer;
}

module.exports = problem4;
