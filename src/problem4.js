function problem4(word) {
  return [...word]
    .map((alphabet) => {
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

      if (targetUnicode >= UNICODE.a)
        return targetUnicode >= UNICODE.n
          ? String.fromCharCode(UNICODE.a + (UNICODE.z - targetUnicode))
          : String.fromCharCode(UNICODE.z - (targetUnicode - UNICODE.a));

      if (targetUnicode <= UNICODE.Z)
        return targetUnicode >= UNICODE.N
          ? String.fromCharCode(UNICODE.A + (UNICODE.Z - targetUnicode))
          : String.fromCharCode(UNICODE.Z - (targetUnicode - UNICODE.A));
    })
    .join("");
}

module.exports = problem4;
