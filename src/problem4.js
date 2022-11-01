function problem4(word) {
  var answer;

  try {
    if (word.length > 1000 || word.length < 1) {
      return -1;
    }
  } catch {
    answer = -1;
  }
  return answer;
}

module.exports = problem4;
