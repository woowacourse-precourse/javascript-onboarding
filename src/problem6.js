function problem6(forms) {
  forms = forms
    .filter((form) => form[1].length > 1)
    .map((form) => form.concat(splitNickname(form[1])));
  var answer = sortEmail(compareAllCrews(forms));
  return answer;
}

/**
 * 닉네임을 두글자씩 쪼개 Set을 만든다
 * @param {string} nickname - 닉네임
 * @returns {Set<string>} 쪼갠 닉네임 모음 Set
 */
const splitNickname = (nickname) => {
  const splitedSet = new Set();
  for (let i = 0; i < nickname.length - 1; i++) {
    splitedSet.add(nickname.slice(i, i + 2));
  }
  return splitedSet;
};

/**
 * 크루 한 명마다 모든 크루의 닉네임과 비교한다
 * @param {Array<string, string, Set<string>>} forms - [크루 이메일, 닉네임, 닉네임 Set]
 * @returns {Array<string>} 겹치는 크루의 이메일
 */
const compareAllCrews = (forms) => {
  const emailSet = new Set();
  forms.forEach((form, index) => {
    compareNicknames(form[0], form[2], index, forms).forEach((email) => {
      emailSet.add(email);
    });
  });
  return [...emailSet];
};

/**
 * 크루 한 명마다 자신을 제외한 모든 크루의 닉네임과 비교하고, 겹치는 닉네임 문자가 있다면 해당 이메일을 모아 리턴한다
 * @param {string} myEmail - 크루의 이메일
 * @param {Set<string>} myNicknameSet - 크루 닉네임 Set
 * @param {string} myIndex - 해당 크루 인덱스
 * @param {Array<string, string, Set<string>>} forms - [크루 이메일, 닉네임, 닉네임 Set]
 * @returns {Array<string>} 겹치는 크루의 이메일
 */
const compareNicknames = (myEmail, myNicknameSet, myIndex, forms) => {
  const duplicatedEmailList = [];
  forms.forEach((form, index) => {
    if (index !== myIndex) {
      const copyedNicknameSet = new Set([...form[2]]);
      const crewNicknameSetSize = copyedNicknameSet.size;
      myNicknameSet.forEach((splitedNickname) => {
        if (copyedNicknameSet.has(splitedNickname))
          copyedNicknameSet.delete(splitedNickname);
      });
      if (copyedNicknameSet.size !== crewNicknameSetSize) {
        duplicatedEmailList.push(form[0]);
        duplicatedEmailList.push(myEmail);
      }
    }
  });
  return duplicatedEmailList;
};

/**
 * 이메일 리스트를 오름차순으로 정렬한다
 * @param {Array<string>} emailList - 이메일 리스트
 * @returns {Array<string>} 정렬된 이메일 리스트
 */
const sortEmail = (emailList) => {
  return emailList.sort((a, b) => a.localeCompare(b));
};

module.exports = problem6;
