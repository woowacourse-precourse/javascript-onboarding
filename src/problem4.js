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
  let answer = '';

  const { UPPER_END, LOWER_END, UPPER_START, LOWER_START } = numericVars;

  const upperReverseList = makeReverseList(UPPER_END);
  const lowerReverseList = makeReverseList(LOWER_END);

  [...word].forEach(
    (char) =>
      (answer +=
        char === ' '
          ? ' '
          : char === char.toUpperCase()
          ? upperReverseList[char.charCodeAt(0) - UPPER_START]
          : lowerReverseList[char.charCodeAt() - LOWER_START])
  );

  return answer;
};

module.exports = problem4;
