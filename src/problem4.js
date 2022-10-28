function problem4(word) {
  var answer;

  const ASCII_CODE = {
    A: 'A'.charCodeAt(),
    Z: 'Z'.charCodeAt(),
    a: 'a'.charCodeAt(),
    z: 'z'.charCodeAt(),
  };

  function changeContrary(alphabet) {
    const alphabetAscii = alphabet.charCodeAt();
    if (alphabetAscii >= ASCII_CODE.A && alphabetAscii < ASCII_CODE.Z) {
      return String.fromCharCode(ASCII_CODE.A + ASCII_CODE.Z - alphabetAscii);
    } else if (alphabetAscii >= ASCII_CODE.a && alphabetAscii < ASCII_CODE.z) {
      return String.fromCharCode(ASCII_CODE.a + ASCII_CODE.z - alphabetAscii);
    } else return alphabet;
  }

  answer = word
    .split('')
    .map((alphabet) => changeContrary(alphabet))
    .join('');
  return answer;
}

module.exports = problem4;
