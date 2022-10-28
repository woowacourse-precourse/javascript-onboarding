function problem2(cryptogram) {
  let answer;

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

module.exports = problem2;
