function problem3(number) {
  var answer;

  try {
    if (number > 10000 || number < 0) {
      throw new Error('number must between(1, 10,000)');
    }
  } catch {
    return -1;
  }

  return answer;
}

module.exports = problem3;
