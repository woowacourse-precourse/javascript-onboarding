function problem2(cryptogram) {
  if (
    cryptogram.length < 1 ||
    cryptogram.length > 1000 ||
    typeof cryptogram !== 'string'
  ) {
    return false;
  }

  var answer = [cryptogram[0]];

  for (var i = 1; i < cryptogram.length; i++) {
    var checkReduplication = answer[answer.length - 1];

    if (checkReduplication === cryptogram[i]) {
      answer.pop();
      continue;
    }
    answer.push(cryptogram[i]);
  }

  return answer.join('');
}

module.exports = problem2;
