function problem2(cryptogram) {
  var result;
  let stack = [];
  for (var i = 0; i < cryptogram.length; i++) {
    var top = stack[stack.length - 1];

    if (top == cryptogram[i]) {
      while (top == cryptogram[i + 1]) { i++; }
      stack.pop();
    } else {
      stack.push(cryptogram[i]);
    }
  }
  result = stack.join('');
  return result;
}

module.exports = problem2;