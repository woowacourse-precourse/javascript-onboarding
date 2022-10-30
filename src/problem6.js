function problem6(forms) {
  var answer;
  forms = forms.filter((form) => form[1].length > 1);
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

module.exports = problem6;
