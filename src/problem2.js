function problem2(cryptogram) {}

function checkException(str) {
  const x = str.length >= 1 && str.length <= 1000;
  const y = str.toLowerCase() === str;
  return x && y;
}

module.exports = problem2;
