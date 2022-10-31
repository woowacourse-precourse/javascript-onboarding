/*
[x] 문자열을 한 번 순회하면서 중복된 문자를 제거하는 기능을 구현한다.
[x] 중복된 문자가 없을 때까지 중복된 문자를 제거하고 결과를 반환한다.
*/

class Decoder {
  decode(cryptogram) {
    while (true) {
      const removedString = this._removeDuplicatedString(cryptogram);
      if (removedString.length === cryptogram.length) {
        break;
      }
      cryptogram = removedString;
    }
    return cryptogram;
  }

  _removeDuplicatedString(string) {
    const stringLength = string.length;
    const chars = [""];
    let currentChar = string[0];
    for (let index = 0; index < stringLength; index += 1) {
      const char = string[index];
      if (currentChar !== char) {
        chars.push(char);
        currentChar = char;
      } else {
        chars[chars.length - 1] += char;
      }
    }
    return chars.filter((char) => char.length === 1).join("");
  }
}

function problem2(cryptogram) {
  const decoder = new Decoder();
  return decoder.decode(cryptogram);
}

module.exports = problem2;
