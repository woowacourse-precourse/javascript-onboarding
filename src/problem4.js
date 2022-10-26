// ASCII code
// " " === 32
const SPACE_CHARCODE = 32;
// a - z: 97 - 122 | 중간값 109, 110 (m, n)
const LOWER_A_CHARCODE = 97;
const LOWER_MIN1_CHARCODE = 109;
const LOWER_MIN2_CHARCODE = 110;
const LOWER_Z_CHARCODE = 122;
// A - Z: 65 - 90  | 중간값 77, 78
const UPPER_A_CHARCODE = 65;
const UPPER_MIN1_CHARCODE = 77;
const UPPER_MIN2_CHARCODE = 75;
const UPPER_Z_CHARCODE = 90;

function problem4(word) {
  var answer = "";
  for (let i = 0; i < word.length; i++) {
    let prevCharCode = word[i].charCodeAt(0);
    let diff;
    if (prevCharCode === SPACE_CHARCODE) {
      answer = answer + word[i];
    } else {
      // A - M
      if (
        UPPER_A_CHARCODE <= prevCharCode &&
        prevCharCode <= UPPER_MIN1_CHARCODE
      ) {
        diff = prevCharCode - UPPER_A_CHARCODE;
        prevCharCode = UPPER_Z_CHARCODE - diff;
      }
      // N - Z
      else if (
        UPPER_MIN2_CHARCODE <= prevCharCode &&
        prevCharCode <= UPPER_Z_CHARCODE
      ) {
        diff = UPPER_Z_CHARCODE - prevCharCode;
        prevCharCode = UPPER_A_CHARCODE + diff;
      }
      // a - m
      else if (
        LOWER_A_CHARCODE <= prevCharCode &&
        prevCharCode <= LOWER_MIN1_CHARCODE
      ) {
        diff = prevCharCode - LOWER_A_CHARCODE;
        prevCharCode = LOWER_Z_CHARCODE - diff;
      }
      // n - z
      else if (
        LOWER_MIN2_CHARCODE <= prevCharCode &&
        prevCharCode <= LOWER_Z_CHARCODE
      ) {
        diff = LOWER_Z_CHARCODE - prevCharCode;
        prevCharCode = LOWER_A_CHARCODE + diff;
      }
      answer = answer + String.fromCharCode(prevCharCode);
    }
  }
  return answer;
}

module.exports = problem4;
