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

function convertCapital(ch) {
  const mid = ("Z".charCodeAt() + "A".charCodeAt()) / 2;

  if (ch < mid) {
    const diff = mid - ch.charCodeAt();
    return String.fromCharCode(mid + diff);
  } else {
    const diff = ch.charCodeAt() - mid;
    return String.fromCharCode(mid - diff);
  }
}

function convertLower(ch) {
  const mid = ("z".charCodeAt() + "a".charCodeAt()) / 2;

  if (ch < mid) {
    const diff = mid - ch.charCodeAt();
    return String.fromCharCode(mid + diff);
  } else {
    const diff = ch.charCodeAt() - mid;
    return String.fromCharCode(mid - diff);
  }
}

module.exports = problem4;
