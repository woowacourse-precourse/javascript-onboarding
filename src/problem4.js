function problem4(word) {
  let arr = Array.from(word.length);

  // 문자열을 읽으며, 현재 읽는 문자가 알파벳인 경우 converter 함수로 변환시키는 반복문
  for (let i = 0; i < word.length; i++) {
    if (
      (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) ||
      (word[i].charCodeAt(0) >= 97 && word[i].charCodeAt(0) <= 122)
    ) {
      arr[i] = converter(word[i]);
    } else {
      arr[i] = word[i];
    }
  }
  return arr.join("");
}

// 인자로 들어오는 알파벳의 아스키코드값을 분석하여, 기준에 따른 알파벳으로 변환 후 반환하는 기능을 하는 함수
const converter = (alphabet) => {
  if (alphabet.charCodeAt(0) >= 65 && alphabet.charCodeAt(0) <= 90) {
    return String.fromCharCode(
      alphabet.charCodeAt(0) + (77 - alphabet.charCodeAt(0)) * 2 + 1
    );
  }
  return String.fromCharCode(
    alphabet.charCodeAt(0) + (109 - alphabet.charCodeAt(0)) * 2 + 1
  );
};

module.exports = problem4;
