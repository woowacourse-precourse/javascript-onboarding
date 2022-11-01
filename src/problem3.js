/**
 * Problem 3
 * 1. 1부터 number까지 숫자를 element로 갖는 배열 생성
 * 2. join을 통해 하나의 문자열 변환
 * 3. 문자열에서 3, 6, 9를 제거
 * 4. 처음 문자열과 길이 비교 => 해당 값이 박수 횟수
 * @param {number} number 1 이상 10,000 이하
 * @return {number}
 */
function problem3(number) {
  const numberString = [...Array(number + 1)].map((_, i) => i).join("");
  const numberStringRemoved369 = numberString.replace(/[369]/g, "");
  return numberString.length - numberStringRemoved369.length;
}

module.exports = problem3;
