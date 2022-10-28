function removeSameWord(cryptogram) {
  let result = cryptogram;
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] === result[i + 1]) {
      result = result.slice(0, i) + result.slice(i + 2);
      i -= 1;
    }
  }

  return result;
}

function problem2(cryptogram) {
  var answer;

  answer = cryptogram;
  let prevLength = answer.length;

  while (true) {
    answer = removeSameWord(answer);

    if (answer.length === prevLength) {
      return answer;
    }
    prevLength = answer.length;
  }
}

module.exports = problem2;
