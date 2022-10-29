/**
 * @name problem2
 * @description
 * 암호문을 좋아하는 괴짜 개발자 브라운이 이번에는 중복 문자를 이용한 새로운 암호를 만들었다.
 * 예를 들어 "browoanoommnaon"이라는 암호문은 다음과 같은 순서로 해독할 수 있다.
 *
 * "browoanoommnaon"
 * "browoannaon"
 * "browoaaon"
 * "browoon"
 * "brown"
 *
 * 임의의 문자열 cryptogram이 매개변수로 주어질 때,
 * 연속하는 중복 문자들을 삭제한 결과를 return 하도록 solution 메서드를 완성하라.
 * @param {string} [cryptogram]
 * @return {string} 연속하는 중복 문자들을 삭제한 결과를 return
 * @throws cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
 * @throws cryptogram은 알파벳 소문자로만 이루어져 있다.
 * @todo 1. cryptogram이 포함하고있는 알파벳 소문자가 연속된 경우를 체크하는 정규식 반환하는 함수
 * @todo 2. 중복이 존재하는지 판별하는 함수
 * @todo 3. 알파벳 소문자가 연속되는게 있다면 제거해주는 함수
 */

function problem2(cryptogram) {
  if (cryptogram.length <= 1) return cryptogram;
  return getNoRepeat(cryptogram);
}

function getIncludeLowerCaseRegExp(cryptogram) {
  return new RegExp(
    `${Array.from(new Set(cryptogram))
      .map((char) => char + "{2,}")
      .join("|")}`,
    "g"
  );
}

function getNoRepeat(cryptogram) {
  const noRepeat = [];
  cryptogram.split("").forEach((char) => {
    const prevChar = noRepeat.pop();
    if (prevChar === char) return;
    noRepeat.push(prevChar, char);
  });
  return noRepeat.join("");
}

module.exports = problem2;
