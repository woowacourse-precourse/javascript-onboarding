function problem2(cryptogram) {
  var stack = [cryptogram[0]];
  cryptogram = cryptogram.split("");
  cryptogram.shift();
  var t = cryptogram.length;
  for (var i = 0; i < t; i++) {
    if (stack.slice(-1) == cryptogram[0]) {
      stack.pop();
      cryptogram.shift();
    } else {
      stack.push(cryptogram[0]);
      cryptogram.shift();
    }
  }
  return stack.join("");
}

module.exports = problem2;
