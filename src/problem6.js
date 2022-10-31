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

/**
 * 중복 제거 및 email을 기준으로 오름차순 정렬한 email 배열을 반환합니다.
 * @param {string[]} list [email, nickname] 쌍으로 이뤄진 배열입니다.
 * @returns {string[]} 오름차순으로 정렬된 email 배열입니다.
 */
function getUniqueList(list) {
  const uniqueList = [];

  for (const [email] of list) {
    if (!uniqueList.includes(email)) {
      uniqueList.push(email);
    }
  }

  uniqueList.sort();

  return uniqueList;
}

function problem6(forms) {
  let answer = [];
  const repeatedCrews = [];

  for (const [, nickname] of forms) {
    repeatedCrews.push(
      ...forms.filter(
        (f) => nickname !== f[1] && isRepeatedNickname(nickname, f[1])
      )
    );
  }

  answer = getUniqueList(repeatedCrews);

  return answer;
}

module.exports = problem6;
