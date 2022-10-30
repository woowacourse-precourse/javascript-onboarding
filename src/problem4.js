function problem4(word) {
  return [...word]
    .map((alphabet) => {
      // 알파벳 외의 문자는 변환하지 않는다. (특수문자 및 공백 체크)
      if (!/[a-zA-Z]/g.test(alphabet)) return alphabet;

      const UNICODE = {
        A: "A".charCodeAt(),
        Z: "Z".charCodeAt(),
        N: "N".charCodeAt(),
        a: "a".charCodeAt(),
        z: "z".charCodeAt(),
        n: "n".charCodeAt(),
      };
      const targetUnicode = alphabet.charCodeAt();

      // 소문자일 경우
      if (targetUnicode >= UNICODE.a)
        // 단어 n이 넘어간 경우 (절반 이상인 경우)
        return targetUnicode >= UNICODE.n
          ? String.fromCharCode(UNICODE.a + (UNICODE.z - targetUnicode))
          : String.fromCharCode(UNICODE.z - (targetUnicode - UNICODE.a));

      // 대문자일 경우
      if (targetUnicode <= UNICODE.Z)
        // 단어 N이 넘어간 경우 (절반 이상인 경우)
        return targetUnicode >= UNICODE.N
          ? String.fromCharCode(UNICODE.A + (UNICODE.Z - targetUnicode))
          : String.fromCharCode(UNICODE.Z - (targetUnicode - UNICODE.A));
    })
    .join("");
}

module.exports = problem4;
