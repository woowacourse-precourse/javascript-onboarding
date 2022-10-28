function problem2(cryptogram) {
  var answer;
  var code = [];
  code.push(cryptogram[0]);

  for (var i = 1; i < cryptogram.length; i++) {
    const curr = cryptogram[i];
    const prev = code.length - 1;

    if (code[prev] === curr) {
      code.pop();
    } else code.push(curr);
  }
  return code.join("");
  return answer;
}

module.exports = problem2;
