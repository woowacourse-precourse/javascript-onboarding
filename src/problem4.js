const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASE = UPPER_CASE.toLowerCase();
const BLUE_FLUG_OBJECT = {};
const LIMIT = UPPER_CASE.length;

for (let i = 0; i < LIMIT; i++) {
  BLUE_FLUG_OBJECT[UPPER_CASE[i]] = UPPER_CASE[LIMIT - 1 - i];
  BLUE_FLUG_OBJECT[LOWER_CASE[i]] = LOWER_CASE[LIMIT - 1 - i];
}

BLUE_FLUG_OBJECT[" "] = " ";
Object.freeze(BLUE_FLUG_OBJECT);

function problem4(word) {
  var answer = "";
  for (let char of word) {
    answer += BLUE_FLUG_OBJECT[char];
  }
  return answer;
}

module.exports = problem4;
