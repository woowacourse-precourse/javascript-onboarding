const ASCII_UPPER_A = 65;
const ASCII_UPPER_Z = 90;
const ASCII_LOWER_A = 97;
const ASCII_LOWER_Z = 122;

/**
 * @name problem4
 * @description
 * 계좌에 들어있는 돈 일부를 은행에서 출금하고자 한다.
 * 돈 담을 지갑이 최대한 가볍도록 큰 금액의 화폐 위주로 받는다.
 * 돈의 액수 money가 매개변수로 주어질 때,
 * 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전
 * 각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아 return 하도록 solution 메서드를 완성하라.
 * @param {number} [word]
 * @return {number[]} 각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아 return
 * @throws money는 1 이상 1,000,000 이하인 자연수이다.
 * @todo 1. 반대되는 대문자 알파벳을 리턴하는 함수
 * @todo 2. 반대되는 소문자 알파벳을 리턴하는 함수
 * @todo 3. 대문자인지 판별하는 함수
 * @todo 4. 소문자인지 판별하는 함수
 * @todo 5. 알파벳인지 판별하는 함수
 * @todo 6. 메인 함수에서 각 글자를 순회하며 판별하고 반대 글자 누적 후 리턴
 */

function problem4(word) {
  const answer = [];
  word.split("").forEach((char) => {
    if (!isAlphabet(char)) answer.push(char);
    if (isUpperCase(char)) answer.push(getUpperReverseWord(char));
    if (isLowerCase(char)) answer.push(getLowerReverseWord(char));
  });
  return answer.join("");
}

function getUpperReverseWord(char) {
  return String.fromCharCode(
    Math.abs(char.charCodeAt() - "Z".charCodeAt()) + "A".charCodeAt()
  );
}

function getLowerReverseWord(char) {
  return String.fromCharCode(
    Math.abs(char.charCodeAt() - "z".charCodeAt()) + "a".charCodeAt()
  );
}

function isUpperCase(char) {
  const ascii = char.charCodeAt();
  if (ascii >= ASCII_UPPER_A && ascii <= ASCII_UPPER_Z) return true;
  return false;
}

function isLowerCase(char) {
  const ascii = char.charCodeAt();
  if (ascii >= ASCII_LOWER_A && ascii <= ASCII_LOWER_Z) return true;
  return false;
}

function isAlphabet(char) {
  if (isUpperCase(char) || isLowerCase(char)) return true;
  return false;
}

module.exports = problem4;
