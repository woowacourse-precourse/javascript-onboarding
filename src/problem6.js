/*
 * X: 1. 리턴할 빈 배열 선언 - 의사코드가 달라짐에 따라 폐기
 * 2. 변수 twoLetters에 닉네임 2개씩 자르기
 * 3. form 순회하며 2개씩 자른 거랑 비교
 *   3-1. form의 닉네임과 twoLetter와 하나씩 비교, twoLetter가 아마 이차원 배열이니 이중 반복문
 *   3-2. includes로 불린데이터 반환, 배열 추가
 * 4. form에서 filter된 것을 인덱스 1로 추출한 다음 sort()
 */
function problem6(forms) {
  let twoLetters = [];
  // 2. 2글자 씩 추출, 이차원 배열 탄생
  for (let i = 0; i < forms.length; i++) {
    twoLetters.push([]);
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      twoLetters[i][j] = forms[i][1].slice(j, j + 2);
    }
  }
  // 3. 순회
  let overlapCrew = forms.filter((crew, idx) => {
    // 3-1. 이중반복문
    for (let i = 0; i < twoLetters.length; i++) {
      for (let j = 0; j < twoLetters.length; j++) {
        // 3-2. includes
        if (crew[1].includes(twoLetters[i][j])) {
          return true;
        }
      }
    }
  });
  // 4. 추출 및 정렬
  let overlapMail = overlapCrew.map((el) => el[0]);
  return overlapMail.sort();
}

module.exports = problem6;
