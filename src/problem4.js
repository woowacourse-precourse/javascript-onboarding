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

function lowerCase(number) {
  let alpabet = [];

  for (let i = 97; i <= 122; i++) {
    alpabet.push(i);
  }
  return alpabet.indexOf(number);
}

module.exports = problem4;
