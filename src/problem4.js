const numericVars = {
  UPPER_START: 65,
  UPPER_END: 90,
  LOWER_START: 97,
  LOWER_END: 122,
};

const makeReverseList = (endNumber) => {
  const LETTER_COUNT = 26;

  return Array.from({ length: LETTER_COUNT }).map((_, i) =>
    String.fromCharCode(endNumber - i)
  );
};

const problem4 = (word) => {
  const answer = '';

  return answer;
};

module.exports = problem4;
