function pipe(...funcs) {
  return (v) => {
    return funcs.reduce((res, func) => {
      return func(res);
    }, v);
  };
}

/**
 * 닉네임을 2글자씩 분리해 배열로 반환하는 함수
 * @param {string[]} arr
 * @return {string[]}
 */
function seperateNickName(arr) {
  return arr.map((nickName) => {
    const seperated = [];

    for (let i = 0; i < nickName.length - 1; i++) {
      let word = nickName[i] + nickName[i + 1];
      seperated.push(word);
    }

    return seperated;
  });
}

/**
 * 분리된 닉네임이 포함된 갯수를 count하는 함수
 * @param {string[]} arr
 * @returns {Object}
 */
function countSeperatedNickName(arr) {
  return arr.reduce((count, seperatedNickName) => {
    if (!count[seperatedNickName]) {
      count[seperatedNickName] = 0;
    }
    count[seperatedNickName]++;

    return count;
  }, {});
}

/**
 * 중복 닉네임을 포함한 닉네임들의 email을 배열에 저장하는 함수
 * @param {string[][]} forms
 * @returns {Function}
 */
function getEmailList(forms) {
  return (arr) => {
    return arr.map((key) => {
      const emailList = [];

      for (let i = 0; i < forms.length; i++) {
        if (forms[i][1].indexOf(key) !== -1) {
          emailList.push(forms[i][0]);
        }
      }

      return emailList;
    });
  };
}

/**
 * 배열의 중복된 값을 제거하는 함수
 * @param {string[]} arr
 * @returns {string[]}
 */
function removeDuplicateValue(arr) {
  return [...new Set(arr)];
}

/**
 * @param {string[][]} forms
 * @returns {string[]}
 */
function problem6(forms) {
  const nickNameList = forms.map(([_, nickName]) => nickName);

  const seperatedNickNameWithCount = pipe(
    seperateNickName,
    (arr) => arr.flat(),
    countSeperatedNickName
  )(nickNameList);

  const duplicatedNickNameList = [];

  for (const [key, value] of Object.entries(seperatedNickNameWithCount)) {
    if (value > 1) {
      duplicatedNickNameList.push(key);
    }
  }

  const answer = pipe(
    getEmailList(forms),
    (arr) => arr.flat(),
    (arr) => arr.sort(),
    removeDuplicateValue
  )(duplicatedNickNameList);

  return answer;
}

module.exports = problem6;
