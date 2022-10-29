function problem4(word) {
  var answer;
  return answer;
}

/**
 * A -Z를 맵핑할 함수를 생성
 * 해당 함수를 사용해서 문자열을 순회하기
 */

/**
 *
 * @param {string} ch
 */
function mapAlphabet(ch) {}

function getMid(ch) {
  const chCode = ch.charCodeAt();
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

function reverseCharacter(ch) {
  const mid = getMid(ch);
  const diff = Math.abs(mid - ch.charCodeAt());
  if (ch < mid) {
    return String.charCodeAt(mid + diff);
  } else {
    return String.charCodeAt(mid - diff);
  }
}

module.exports = problem4;
