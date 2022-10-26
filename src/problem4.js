function problem4(word) {
  var answer;
  return answer;
}

function isUpper(string) {
  return string.match(new RegExp(/^[A-Z]/)) !== null;
}

function isLower(string) {
  return string.match(new RegExp(/^[a-z]/)) !== null;
}

console.log(problem4('I love you'));

module.exports = problem4;
