function problem2(cryptogram) {
  var answer = [cryptogram[0]];

  for (var i=1; i<cryptogram.length; i++) {
    const character = cryptogram[i];
    const pre = answer[answer.length - 1];

    if (pre === character)
      answer.pop();
    else
      answer.push(character)
  }

  return answer.join("");
}

module.exports = problem2;