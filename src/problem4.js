function problem4(word) {
  const alphabet = Array.from({length: 26}, (v, i) => String.fromCharCode(i + 65));
  let text = word.split("");

  // 반대 알파벳 인덱스 번호 찾기
  const findIdx = text => {
    return 25 - alphabet.indexOf(text);
  };
}

module.exports = problem4;
