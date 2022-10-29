function problem4(word) {
  // 필요함수
  //#1. 알파벳이 들어오면 반대의 알파벳으로 변경해주는 함수

  const ASCII_OBJ = {
    A: 65,
    M: 77,
    N: 78,
    Z: 90,
    a: 97,
    m: 109,
    n: 110,
    z: 122,
  };

  function RETURN_REVERSED_ALPHABET(letter) {
    let inputASCII = letter.charCodeAt();
    let outputASCII;

    if (inputASCII >= ASCII_OBJ.A && inputASCII <= ASCII_OBJ.M) {
      outputASCII = ASCII_OBJ.Z - (inputASCII - ASCII_OBJ.A);
    }

    if (inputASCII >= ASCII_OBJ.M && inputASCII <= ASCII_OBJ.Z) {
      outputASCII = ASCII_OBJ.A + (ASCII_OBJ.Z - inputASCII);
    }

    if (inputASCII >= ASCII_OBJ.a && inputASCII <= ASCII_OBJ.m) {
      outputASCII = ASCII_OBJ.z - (inputASCII - ASCII_OBJ.a);
    }

    if (inputASCII > ASCII_OBJ.m && inputASCII < ASCII_OBJ.n) {
      outputASCII = ASCII_OBJ.a + (ASCII_OBJ.z - inputASCII);
    }

    return String.fromCharCode(outputASCII);
  }

  // 특이사항
  //!1. word의 길이는 1이상 1000 이하인 문자열
  //!2. 알파벳 외의 문자는 변환하지 않음
  //!3. 알파벳 대문자는 대문자, 소문자는 소문자로 변환
  var answer;
  return answer;
}

module.exports = problem4;
