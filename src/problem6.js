/** 기능 목록
 *  1. 유저의 닉네임을 2글자씩 잘라 중복 횟수를 표시하는 객체 Dictionary를 생성
 *  2. 닉네임을 2글자씩 잘라 Dictionary와 비교해 중복 횟수가 2 이상인 유저의 이메일을 반환
 *  3. 이메일을 중복 제거 후 오름차순으로 정렬
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

  const emails = forms.reduce((acc, form) => {
    const nickname = form[1];
    for (let i = 0; i < nickname.length - 1; i++) {
      const word = nickname.slice(i, i + 2);
      if (dictionary[word] > 1) {
        acc.push(form[0]);
        break;
      }
    }
    return acc;
  }, []);

  return [...new Set(emails)].sort((a, b) => a.localeCompare(b));
}

module.exports = problem6;
