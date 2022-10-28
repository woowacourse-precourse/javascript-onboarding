function problem4(word) {
  var answer;
  return answer;
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
