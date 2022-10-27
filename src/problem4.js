// 예외처리
//  0 [x] word.length <= 0 : return answer

// 로직
// 1 알파벳에 해당하는 map을 모두 만들어 대응
// or 2 Ascii 코드 특성 사용 A+Z: 155 a+z: 219

// ! 2번 로직을 선택하여 작성
// 1. [ ] A-Z, a-z 는 합이 각각 155, 219가 되도록 치환할 수 있음
// 2. 대문자의 경우 155에서 해당 문자의 아스키값을 뺀 값을 치환하여 추가
// 3. 소문자의 경우 219에서 해당 문자의 아스키값을 뺀 값을 치환하여 추가
// 4. 알파벳 외의 문자는 그대로 answer에 추가
 
function problem4(word) {
  // 0. 예외처리
  if (word.length <= 0) return word;

  let answer = '';
  // 1. 각 합 155, 219
  // A + Z : 155
  const upper = "A".charCodeAt(0) + "Z".charCodeAt(0);
  // a + z : 219
  const lower = "a".charCodeAt(0) + "z".charCodeAt(0);

  for (let i=0; i<word.length; i++) {
    const currCode = word.charCodeAt(i);
    if (currCode >= "A".charCodeAt(0) && currCode <= "Z".charCodeAt(0)) {
    // 2. 대문자의 경우
      answer += String.fromCharCode(upper - currCode);
    } else if (currCode >= "a".charCodeAt(0) && currCode >= "z".charCodeAt(0)) {
      // 3. 소문자의 경우
      answer += String.fromCharCode(lower - currCode);
    } else {
      // 4. 그 외 값은 그대로 추가ㄴ
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;
