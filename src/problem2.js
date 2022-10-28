function problem2(cryptogram) {
  let answer;

  answer = decrypt(cryptogram);

  return answer;
}
const removeConsecutiveDuplicates = (text) => {
  const textArr = text.split("");
  let lastChar = textArr[0];
  let dupeCount = 0,
    i = 1;
  for (i; i < textArr.length; i++) {
    if (textArr[i] == lastChar) {
      textArr[i - 1] = "";
      dupeCount++;
    } else {
      if (dupeCount != 0) {
        textArr[i - 1] = "";
        dupeCount = 0;
      }
      lastChar = textArr[i];
    }
  }
  if (dupeCount != 0) {
    textArr[i - 1] = "";
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
