/**
 * target과 nickname이 2글자가 겹치는지 검사합니다.
 * @param {string} nickname 겹치는지 확인 할 닉네임입니다.
 * @param {string} target 겹치는지 확인 할 닉네임입니다. 검사의 기준이 됩니다.
 * @returns {boolean} 겹치면 true, 안겹치면 false를 반환합니다.
 */
function isRepeatedNickname(nickname, target) {
  for (let i = 0; i < target.length; i++) {
    const targetString = target.substring(i, 2);

    if (targetString.length === 2 && nickname.includes(targetString)) {
      return true;
    }
  }

  return false;
}

function problem6(forms) {
  var answer;
  const repeatedCrews = [];

  for (const [, nickname] of forms) {
    repeatedCrews.push(
      ...forms.filter(
        (f) => nickname !== f[1] && isRepeatedNickname(nickname, f[1])
      )
    );
  }

  return answer;
}

module.exports = problem6;
