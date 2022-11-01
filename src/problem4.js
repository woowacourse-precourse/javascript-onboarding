function problem4(word) {
  const answer = [];

  const asciiArr = [];
  const resultArr = [];

  const EMPTY = 32;
  const ASCII_CODE_A = 65;
  const ASCII_CODE_Z = 90;
  const ASCII_CODE_UPPER_CASE_RANGE = 155;
  const ASCII_CODE_LOWER_CASE_RANGE = 219;

  for (let i = 0; i < word.length; i++) {
    asciiArr.push(word.charCodeAt(i));
  }

  for (let i = 0; i < asciiArr.length; i++) {
    if (asciiArr[i] === EMPTY) {
      resultArr.push(EMPTY);
    } else if (asciiArr[i] >= ASCII_CODE_A && asciiArr[i] <= ASCII_CODE_Z) {
      resultArr.push(ASCII_CODE_UPPER_CASE_RANGE - asciiArr[i]);
    } else {
      resultArr.push(ASCII_CODE_LOWER_CASE_RANGE - asciiArr[i]);
    }
  }

  for (let i = 0; i < resultArr.length; i++) {
    answer.push(String.fromCharCode(resultArr[i]));
  }

  return answer.join("");
}

module.exports = problem4;
