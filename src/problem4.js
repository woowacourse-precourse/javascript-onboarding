function problem4(word) {
  var answer = "";
  const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const BLUE_FROG_DICT = {};
  const ALPHABET_LENGTH = UPPER_CASE.length;

  for (let i = 0; i < ALPHABET_LENGTH; i++) {
    BLUE_FROG_DICT[UPPER_CASE[i]] = UPPER_CASE[ALPHABET_LENGTH - (i + 1)];
  }

  for (let char of word) {
    answer += BLUE_FROG_DICT[char];
  }
  return answer;
}

module.exports = problem4;
