/*
[x] 문자 하나를 청개구리 말로 변환하는 기능을 구현한다.
[x] word를 청개구리 말로 변환하고 결과를 반환한다.
*/

class FlogTranslator {
  translate(word) {
    let flogWord = "";
    for (const char of [...word]) {
      flogWord += this._toFlogChar(char);
    }
    return flogWord;
  }

  _toFlogChar(char) {
    let ascii;
    if ("A" <= char && char <= "Z") {
      ascii = 65;
    } else if ("a" <= char && char <= "z") {
      ascii = 97;
    } else {
      return char;
    }
    const flogCode = ascii + 25 - Math.abs(ascii - char.charCodeAt());
    const flogChar = String.fromCharCode(flogCode);
    return flogChar;
  }
}

function problem4(word) {
  const flogTranslator = new FlogTranslator();
  return flogTranslator.translate(word);
}

module.exports = problem4;
