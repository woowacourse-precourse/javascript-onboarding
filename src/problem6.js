/** 기능 목록
 *  1. 유저의 닉네임을 2글자씩 잘라 중복 횟수를 표시하는 객체 Dictionary를 생성
 *  2. 객체 Dictionary를 순회하며 forms의 각 요소의 닉네임에 Dictionary의 요소가 포함되어 있는지 확인
 *  3. 포함되어 있다면, 해당 유저의 Email을 반환 (오름차순 중복 제거)
 */

function problem6(forms) {
  const dictionary = forms
    .map((form) => form[1])
    .reduce((acc, nickname) => {
      for (let i = 0; i < nickname.length - 1; i++) {
        const word = nickname.slice(i, i + 2);
        if (acc[word]) {
          acc[word] += 1;
        } else {
          acc[word] = 1;
        }
      }
      return acc;
    }, {});

  console.log(dictionary);
}

module.exports = problem6;
