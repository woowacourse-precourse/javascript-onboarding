function problem4(word) {
  const alphabet = Array.from({length: 26}, (v, i) => String.fromCharCode(i + 65));
  let text = word.split("");
  let transformText = [];

  // 반대 알파벳 인덱스 번호 찾기
  const findIdx = text => {
    return 25 - alphabet.indexOf(text);
  };

  // 알파벳 변환
  for (el of text) {
    let upper = el.toUpperCase();
    let num = findIdx(upper);

    if (el === " ") {
      el = " ";
    } else if (el !== upper) {
      el = ("" + alphabet[num]).toLowerCase();
    } else if (el === upper) {
      el = ("" + alphabet[num]).toUpperCase();
    }
    transformText.push(el);
  }

  let answer = transformText.join("");
  return answer;
}

module.exports = problem4;
