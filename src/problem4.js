/**
 * A -Z를 맵핑할 함수를 생성
 * 해당 함수를 사용해서 문자열을 순회하기
 */
function problem4(word) {
  const split = word.split("");
  const reversed = split.map((ch) => reverseCharacter(ch));
  return reversed.join("");
}

module.exports = problem4;

/**
 * @param {ch} ch 알파벳 값
 * @returns {string} 반전된 알파벳 값
 */
function reverseCharacter(ch) {
  try {
    const chCode = ch.charCodeAt();
    const mid = getMid(chCode);
    const diff = Math.abs(mid - ch.charCodeAt());

    if (chCode < mid) {
      return String.fromCharCode(mid + diff);
    } else {
      return String.fromCharCode(mid - diff);
    }
  } catch (err) {
    return ch;
  }
}

/**
 *
 * @param {number} chCode String.charCodeAt을 사용해 변환된 숫자값
 * @returns {number} UTF-16 코드를 나타내진 알파벳들의 중간 값
 */
function getMid(chCode) {
  let mid = 0;

  if (chCode >= "A".charCodeAt() && chCode <= "Z".charCodeAt()) {
    mid = ("Z".charCodeAt() + "A".charCodeAt()) / 2;
  } else if (chCode >= "a".charCodeAt() && chCode <= "z".charCodeAt()) {
    mid = ("z".charCodeAt() + "a".charCodeAt()) / 2;
  } else {
    throw new Error("알파벳이 아닙니다");
  }
  return mid;
}
