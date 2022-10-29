function problem4(word) {
  return mapAlphabet(word);
}

/**
 * A -Z를 맵핑할 함수를 생성
 * 해당 함수를 사용해서 문자열을 순회하기
 */

/**
 *
 * @param {string} word
 * @returns {string}
 */
function mapAlphabet(word) {
  const split = word.split("");
  const reversed = split.map((ch) => reverseCharacter(ch));
  return reversed.join("");
}

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

function reverseCharacter(ch) {
  try {
    const chCode = ch.charCodeAt();
    const mid = getMid(ch);
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

module.exports = problem4;
