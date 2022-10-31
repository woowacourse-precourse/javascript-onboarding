const mother = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const son = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];

function problem4(word) {
  if (word.length < 1) {
    return "";
  }

  const words = word.split(" ");
  const answer = [];

  for (let i = 0; i < words.length; i++) {
    let sonWord = "";
    for (let j = 0; j < words[i].length; j++) {
      if (isWords(words[i][j])) {
        const motherIndex = mother.indexOf(words[i][j].toUpperCase());

        if (isUpperCase(words[i][j])) {
          sonWord += son[motherIndex].toUpperCase();
        } else {
          sonWord += son[motherIndex];
        }
      } else {
        sonWord += words[i][j];
      }
    }
    answer.push(sonWord);
  }
  return answer.join(" ");
}

function isWords(input) {
  const code = input.charCodeAt();
  if ((65 <= code && code <= 90) || (97 <= code && code <= 121)) {
    return true;
  } else {
    return false;
  }
}

function isUpperCase(string) {
  const upper = string.toUpperCase();

  if (string === upper) {
    return true;
  } else {
    return false;
  }
}

module.exports = problem4;
