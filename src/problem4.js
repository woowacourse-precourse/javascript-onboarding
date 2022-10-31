function problem4(word) {
  var answer = "";
  const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWER_CASE = UPPER_CASE.toLowerCase();
  const BLUE_FROG_DICT = {};
  const ALPHABET_LENGTH = UPPER_CASE.length;

  for (let i = 0; i < ALPHABET_LENGTH; i++) {
    BLUE_FROG_DICT[UPPER_CASE[i]] = UPPER_CASE[ALPHABET_LENGTH - (i + 1)];
    BLUE_FROG_DICT[LOWER_CASE[i]] = LOWER_CASE[ALPHABET_LENGTH - (i + 1)];
    BLUE_FROG_DICT[" "] = " ";
  }

  for (let char of word) {
    answer += BLUE_FROG_DICT[char];
  }
  return answer;
}

module.exports = problem4;
