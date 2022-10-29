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
function mapAlphabet(ch) {
  const chCode = ch.charCodeAt();
  let pivot = 0;
  if (chCode >= "A".charCodeAt() && chCode <= "Z".charCodeAt()) {
    //대문자일떄
  } else if (chCode >= "a".charCodeAt() && chCode <= "z".charCodeAt()) {
    //소문자일떄
  } else {
    throw new Error("알파벳이 아닙니다");
  }
}
function reverseCharacter(ch, mid) {
  const diff = Math.abs(mid - ch.charCodeAt());

  if (ch < mid) {
    return String.charCodeAt(mid + diff);
  } else {
    return String.charCodeAt(mid - diff);
  }
}

function convertCapital(ch) {
  const mid = ("Z".charCodeAt() + "A".charCodeAt()) / 2;

  return reverseCharacter(ch, mid);
}

function convertLower(ch) {
  const mid = ("z".charCodeAt() + "a".charCodeAt()) / 2;

  return reverseCharacter(ch, mid);
}

module.exports = problem4;
