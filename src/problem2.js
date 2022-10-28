function problem2(cryptogram) {
  const answer = decrypt(cryptogram);
  return answer;
}
//input: 'afcbbbcfaacf'
//expected output: 'acf'
const removeConsecutiveDuplicates = (text) => {
  const textArr = text.split(""),
    textLength = text.length;
  let charToCompare = text[0],
    dupeCount = 0;
  for (let i = 1; i < textLength; i++) {
    if (text[i] == charToCompare) {
      textArr[i - 1] = "";
      dupeCount++;
    } else {
      if (dupeCount != 0) {
        textArr[i - 1] = "";
        dupeCount = 0;
      }
      charToCompare = text[i];
    }
  }
  if (dupeCount != 0) {
    textArr[textLength - 1] = "";
  }
  return textArr.join("");
};
const decrypt = (cryptogram) => {
  let text = cryptogram;
  for (let i = 0; i < cryptogram.length; i++) {
    let temp = removeConsecutiveDuplicates(text);
    if (text === temp) {
      break;
    }
    text = temp;
  }
  return text;
};

module.exports = problem2;
