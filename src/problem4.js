/*
  예외처리
  0. [x] word.length <= 0 : return answer

  로직
  Ascii 코드 특성 사용 A+Z: 155 a+z: 219

  1. [x] A-Z, a-z 는 합이 각각 155, 219가 되도록 치환할 수 있음 - 각 변수 설정 
  2. [x] 대문자의 경우 155에서 해당 문자의 아스키값을 뺀 값을 치환하여 추가
  3. [x] 소문자의 경우 219에서 해당 문자의 아스키값을 뺀 값을 치환하여 추가
  4. [x] 알파벳 외의 문자는 그대로 answer에 추가
*/

function problem4(word) {
  // 0. 예외처리
  if (word.length <= 0) return word;
  const upperA = "A".charCodeAt(0);
  const upperZ = "Z".charCodeAt(0);
  const lowerA = "a".charCodeAt(0);
  const lowerZ = "z".charCodeAt(0);
  let answer = '';

  // 1. 각 합 155, 219
  // A + Z : 155
  const upperSum = upperA + upperZ;
  // a + z : 219
  const lowerSum = lowerA + lowerZ;

  for (let i=0; i<word.length; i++) {
    const currCode = word.charCodeAt(i);
    if (currCode >= upperA && currCode <= upperZ) {
      // 2. 대문자의 경우
      answer += String.fromCharCode(upperSum - currCode);
    } else if (currCode >= lowerA && currCode <= lowerZ) {
      // 3. 소문자의 경우
      answer += String.fromCharCode(lowerSum - currCode);
    } else {
      // 4. 그 외 값은 그대로 추가
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;
