function isException(str) {
  return !(typeof str === 'string') || str.length > 1000 || str.length < 1;
}

function problem4(word) {
  if (isException(word)) return;
}

module.exports = problem4;
