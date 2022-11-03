const VALID_EAMIL_FORMAT = 'email.com';
const MAX_DUPLICATE_COUNT = 2;

function problem6(forms = []) {
  const result = [];
  const filteredForms = forms.filter(
    ([email, name]) => isValidEmail(email) && isValidNickname(name)
  );

  // 연속된 문자 저장
  const namesCount = {};
  for (const [_, name] of filteredForms) {
    const splitNames = name.split('');
    for (let index = 0; index < splitNames.length - 1; index++) {
      const nameKey = `${splitNames[index]}${splitNames[index + 1]}`;
      if (namesCount[nameKey]) namesCount[nameKey]++;
      else namesCount[nameKey] = 1;
    }
  }

  // 연속된 문자 중 MAX_DUPLICATE_COUNT개 이상인 문자만 저장
  const multipleLetters = [];
  for (const [name, count] of Object.entries(namesCount)) {
    if (count >= MAX_DUPLICATE_COUNT) multipleLetters.push(name);
  }

  // 일정 개수 이상인 이름 탐색
  for (const [email, crewName] of filteredForms) {
    for (const multipleLetter of multipleLetters) {
      if (crewName.includes(multipleLetter)) {
        result.push(email);
        break;
      }
    }
  }
  return sortByAlphabetically(result);
}

/** 이메일 형식 확인 */
const isValidEmail = (email = '') => {
  const [_, domain] = email.split('@');
  const isLengthValid = email.length >= 11 && email.length < 20;
  return domain === VALID_EAMIL_FORMAT && isLengthValid;
};
/** 닉네임 형식 확인 */
const isValidNickname = (nickname = '') => {
  const KOREAN_REGEXP = new RegExp(/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\*]+$/);
  const isLengthValid = nickname.length >= 1 && nickname.length < 20;
  return KOREAN_REGEXP.test(nickname) && isLengthValid;
};

/** 대소문자 관계 없이 정렬 */
const sortByAlphabetically = (forms = []) => {
  return forms.sort(function (a, b) {
    const upperCaseA = a.toUpperCase();
    const upperCaseB = b.toUpperCase();

    if (upperCaseA > upperCaseB) return 1;
    if (upperCaseA < upperCaseB) return -1;
    if (upperCaseA === upperCaseB) return 0;
  });
};

module.exports = problem6;
