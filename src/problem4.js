function problem4(word) {
  let ascii_word = [];
  let answer = [];

  for (let i = 0; i < word.length; i++) {
    ascii_word.push(word[i].charCodeAt());
  }

  for (let j = 0; j < ascii_word.length; j++) {
    if (ascii_word[j] === 32) {
      answer.push(" ");
    } else if (65 <= ascii_word[j] && ascii_word[j] <= 90) {
      answer.push(upperCase_reverse(upperCase(ascii_word[j])));
    } else if (97 <= ascii_word[j] && ascii_word[j] <= 122) {
      answer.push(lowerCase_reverse(lowerCase(ascii_word[j])));
    } else {
      answer.push(String.fromCharCode(ascii_word[j]));
    }
  }
  return answer.join("");
}

function upperCase(number) {
  let alpabet = [];

  for (let i = 65; i <= 90; i++) {
    alpabet.push(i);
  }
  return alpabet.indexOf(number);
}

function upperCase_reverse(index) {
  let alpabet_reverse = [];

  for (let i = 90; i >= 65; i--) {
    alpabet_reverse.push(String.fromCharCode(i));
  }
  return alpabet_reverse[index];
}

function lowerCase(number) {
  let alpabet = [];

  for (let i = 97; i <= 122; i++) {
    alpabet.push(i);
  }
  return alpabet.indexOf(number);
}

function lowerCase_reverse(index) {
  let alpabet_reverse = [];

  for (let i = 122; i >= 97; i--) {
    alpabet_reverse.push(String.fromCharCode(i));
  }
  return alpabet_reverse[index];
}

module.exports = problem4;
