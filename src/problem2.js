function problem2(cryptogram) {
  let text = cryptogram.split("");
  // 중복제거
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      delete text[i];
      delete text[i + 1];
    }
  }
}

module.exports = problem2;
