function problem6(forms) {
  let answer = [];
  const CREW_LIMIT = [1, 10000];

  // - [x] 크루는 1명 이상 10,000명 이하이다.
  const checkLimitCrew = (count) => {
    const [min, max] = CREW_LIMIT;
    return count >= min && count <= max;
  };
  if (!checkLimitCrew(forms.length)) {
    throw new Error('크루는 1명 이상 10,000명 이하이다.');
  }

  // - [x] 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
  // - [x] 신청할 수 있는 이메일은 email.com 도메인으로만 제한한다.
  // - [x] 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
  const EMAIL_REGEX = /^[A-Za-z0-9]{1,10}@email.com$/;
  const NICKNAME_REGEX = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{1,20}$/;

  forms.every((form) => EMAIL_REGEX.test(form) && NICKNAME_REGEX.test(form));

  // - [x] 닉네임에 두 글자 이상의 문자가 연속적으로 포함되어 있는 경우 반환하기.
  const getOverlappings = (word, wordIdx) => {
    const value = [];
    forms.forEach((userInfo, _idx) => {
      const [_email, _nickname] = userInfo;

      if (wordIdx === _idx) {
        return;
      }

      const matchNickname = _nickname.includes(word);
      if (matchNickname) {
        value.push(_email);
      }
    });
    return value;
  };

  const initProcess = () => {
    const value = [];
    forms.forEach(([email, nickname], idx) => {
      const length = nickname.length;

      for (let i = 0; i + 2 <= length; i++) {
        const word = nickname.substring(i, i + 2);
        const overlapValue = getOverlappings(word, idx);
        value.push(...overlapValue);
      }
    });
    return value;
  };

  // - [x] 결과를 이메일을 오름차순으로 정렬하고 중복은 제거한다
  const unique = [...new Set(initProcess())];
  answer = unique.sort();

  return answer;
}

module.exports = problem6;
