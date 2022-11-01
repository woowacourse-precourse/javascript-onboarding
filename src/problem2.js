function problem2(cryptogram) {
  while (cryptogram !== removeDuplication(cryptogram)) {
    cryptogram = removeDuplication(cryptogram);
  }
  return cryptogram;
}

// 같은 문자가 2개 이상 연속되어있으면 그 부분을 제거하는 기능을 하는 함수
const removeDuplication = (str) => {
  const regex = new RegExp(/(.)\1+/, "g");

  return str.replace(regex, "");
};

module.exports = problem2;
