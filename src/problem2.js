// 문자열에 중복된 값을 반복해서 삭제하는 problem2 함수 구현

function problem2(cryptogram) {
  let chars = cryptogram.split("");
  while (true) {
    const midResult = [];
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] !== chars[i + 1] && chars[i] !== chars[i - 1]) {
        midResult.push(chars[i]);
      }
    }
    if (midResult.length === chars.length) break;
    chars = midResult;
  }
  return chars.join("");
}

module.exports = problem2;
