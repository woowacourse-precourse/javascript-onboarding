const LOWER_CASE_START_CODE = 97;
const LOWER_CASE_END_CODE = 122;
const UPPER_CASE_START_CODE = 65;
const UPPER_CASE_END_CODE = 90;

const badFrog = (word) => {
  let charCode = word.charCodeAt(word);
  if (charCode >= UPPER_CASE_START_CODE && charCode <= UPPER_CASE_END_CODE) {
    charCode = UPPER_CASE_START_CODE + UPPER_CASE_END_CODE - charCode;
  }
  if (charCode >= LOWER_CASE_START_CODE && charCode <= LOWER_CASE_END_CODE) {
    charCode = LOWER_CASE_START_CODE + LOWER_CASE_END_CODE - charCode;
  }
  return String.fromCharCode(charCode);
}

const problem4 = (word) => {
  let result = '';
  [...word].forEach((w) => {
    result += badFrog(w);
  })
  return result;
}

module.exports = problem4;
