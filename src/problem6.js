// forms Enum
const formsRule = {
  email: 0,
  nickname: 1,
};

/**
 * @param {string[][]} forms - 크루의 신청받은 폼이다. 원소의 첫번째 배열 인덱스에는 이메일, 두번째 배열 인덱스에는 nickname이 들어간다. ex ['herb@email.com'. '허브']
 * @returns {boolean} 요구하는 제한사항에 걸려 올바르지 못한 결과를 낼 수 있는 경우 해당 함수는 true를 반환하며, 문제가 없을 경우 false를 반환한다.
 */
const exceptionChecker = (forms) => {
  // 제한사항 :: 크루는 1명 이상 10000명 이하이다.
  if (forms.length < 1 && forms.length > 10000) return true;

  forms.map((v) => {
    // 제한사항 :: 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
    // 제한사항 :: 신청할 수 있는 이메일은 email.com 도메인으로만 제한한다.
    if (!v[formsRule.email].match(/[a-zA-Z0-9+-\_.]+@email.com+$/g))
      return true;

    // 제한사항 :: 닉네임은 한글만 가능하다.
    if (!v[formsRule.nickname].match(/가-힣/g)) return true;

    // 제한사항 :: 닉네임 전체길이는 1자 이상 20자 미만이다.
    if (v[formsRule.nickname].length < 1 || v[formsRule.nickname].length >= 20)
      return true;
  });

  return false;
};

function problem6(forms) {
  if (exceptionChecker(forms)) {
    return;
  }

  const duplicatedEmail = [];
  // 오름차순으로 forms 정렬
  forms.sort((a, b) => {
    if (a[formsRule.email].split('@')[0] > b[formsRule.email].split('@')[0])
      return 1;
    if (a[formsRule.email].split('@')[0] < b[formsRule.email].split('@')[0])
      return -1;
    if (a[formsRule.email].split('@')[0] === b[formsRule.email].split('@')[0])
      return 0;
  });

  for (let i = 0; i < forms.length; i++) {
    const compareCrew = forms[i]; // 중복을 비교하기 위한 기준이 되는 크루
    for (let j = i + 1; j < forms.length - 1; j++) {
      const targetCrew = forms[j]; // 기준이 되는 크루와 이름이 중복되는지 비교하는 크루
      for (let k = 0; k < targetCrew[formsRule.nickname].length - 1; k++) {
        const duplicatedWord = `${targetCrew[formsRule.nickname][k]}${
          targetCrew[formsRule.nickname][k + 1]
        }`;
        if (compareCrew[formsRule.nickname].includes(duplicatedWord)) {
          // 기준이 되는 크루에게서 두글자 이상 포함하고 있다면 중복으로 판단한다.
          duplicatedEmail.push(
            compareCrew[formsRule.email],
            targetCrew[formsRule.email]
          );
        }
      }
    }
  }

  const emailSet = new Set(duplicatedEmail); //중복으로 들어간 이메일을 set을 통해 제거
  const answer = [...emailSet];

  return answer;
}

module.exports = problem6;
