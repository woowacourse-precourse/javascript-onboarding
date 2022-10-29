function problem4(word) {

  // 특이사항
  //!1. word의 길이는 1이상 1000 이하인 문자열

  function CHECK_WORD_LENGTH_BETWEEN_ONE_TO_THOUSAND (word){
    if(word.length < 1 || word > 1000){
      return false;
    } return true;
  }

  //!2. 알파벳 외의 문자는 변환하지 않음

  function CHECK_IS_ALPHABET(letter){
    
    if(typeof letter !== "string"){
      return false;
    }
    let inputASCII = letter.charCodeAt();
    if(inputASCII >= ASCII_OBJ.A && inputASCII <= ASCII_OBJ.Z){
      return true
    }
    if(inputASCII >= ASCII_OBJ.a && inputASCII <= ASCII_OBJ.z){
      return true
    }
    return false;
  }

  
  if(CHECK_WORD_LENGTH_BETWEEN_ONE_TO_THOUSAND(word) === false){
    return "word의 길이가 1미만 혹은 1,000초과 입니다."
  }

  // 필요함수
  //#1. 알파벳이 들어오면 반대의 알파벳으로 변경해주는 함수
    //!3. 알파벳 대문자는 대문자, 소문자는 소문자로 변환

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

    if (inputASCII >= ASCII_OBJ.m && inputASCII <= ASCII_OBJ.z) {
      outputASCII = ASCII_OBJ.a + (ASCII_OBJ.z - inputASCII);
    }

    return String.fromCharCode(outputASCII);
  }


  const result = [];

  for (i of word) {

    if(CHECK_IS_ALPHABET(i) === false){
      result.push(i)
    } else {
      result.push(RETURN_REVERSED_ALPHABET(i));
    }
  }

  return result.join("");

}

module.exports = problem4;
