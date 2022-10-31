function problem4(word) {
  // 알파벳 상수를 선언합니다.
  const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const ALPHABET_REVERSE = ALPHABET.slice().reverse();
  // 알파벳 정규식 선언
  const reg = /^[a-zA-Z]*$/;

  return [...word].map((text) => {
    // 알파벳이 아니라면 반환
    if(!reg.test(text)) return text;

    // 문자의 인덱스를 찾는다.
    const findIndex = ALPHABET.findIndex((alphabet) => text.toUpperCase() === alphabet);
    if(text === ALPHABET[findIndex]) return ALPHABET_REVERSE[findIndex];
    else return ALPHABET_REVERSE[findIndex].toLowerCase();
  }).join("");
}

module.exports = problem4;
