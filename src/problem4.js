function problem4(word) {
  return [...word]
    .map((alphabet) => {
      // 알파벳 외의 문자는 변환하지 않는다. (특수문자 및 공백 체크)
      if (!/[a-zA-Z]/g.test(alphabet)) return alphabet;
    })
    .join("");
}

module.exports = problem4;
