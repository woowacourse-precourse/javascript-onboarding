function problem6(forms) {
  let answer = [];

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

  // - [ ] 크루는 1명 이상 10,000명 이하이다.
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

  // - [ ] 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
  // - [ ] 신청할 수 있는 이메일은 email.com 도메인으로만 제한한다.
  // - [ ] 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.

  // - [x] 결과를 이메일을 오름차순으로 정렬하고 중복은 제거한다
  const unique = [...new Set(initProcess())];
  answer = unique.sort();

  return answer;
}

module.exports = problem6;
