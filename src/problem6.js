/**
 * 문자열을 두글자의 문자열로 쪼갠다
 * @param {string} nickName - 닉네임
 * @param {number} index - index 번호
 * @return {string}
 */
const getTemporaryWord = (nickName, index) => {
  return nickName.substring(index, index + 2);
};

/**
 * 이미 임시 단어 object 에 주어진 임시 문자열이 존재하는지 확인
 * @param {object} commonNicknameObject - 임시 단어 object
 * @param {string} temporaryWord - 임시 단어
 * @return {boolean}
 */
const isTmpWordAlreadyExists = (commonNicknameObject, temporaryWord) => {
  return commonNicknameObject[temporaryWord];
};

/**
 * 임시 단어 object 를 key값으로 이루어진 순회 가능한 array 로 변환
 * @param {object} object - 임시 단어 object
 * @return {string[]}
 */
const getIterableArrWithKeys = (object) => {
  return Object.keys(object);
};

/**
 * 임시 단어 object 에 주어진 임시 단어 set 의 사이즈가 2보다 큰지 확인
 * @param {object} commonNickNameObject - 임시 단어 object
 * @param {string} nickname - 닉네임
 * @return {boolean}
 */
const isCommonNickNameSizeBiggerThanTwo = (commonNickNameObject, nickname) => {
  return commonNickNameObject[nickname].size >= 2;
};

/**
 * main 함수
 * @param {string[][]} forms
 * @return {string[]}
 */
const problem6 = (forms) => {
  let answer = [];
  const commonNickName = {};

  // 닉네임 누적
  forms.forEach((singleUser) => {
    const [email, nickName] = singleUser; // destructuring

    for (let i = 0; i < nickName.length - 1; i++) {
      const temporaryWord = getTemporaryWord(nickName, i); // 길이 2의 임시 단어
      // commonNickName object에 이미 임시 단어가 존재할 시
      if (isTmpWordAlreadyExists(commonNickName, temporaryWord)) {
        commonNickName[temporaryWord].add(email);
        continue;
      }

      commonNickName[temporaryWord] = new Set([email]);
    }
  });

  // 중복 닉네임 도출
  getIterableArrWithKeys(commonNickName).map((nickName) => {
    if (isCommonNickNameSizeBiggerThanTwo(commonNickName, nickName))
      answer.push(...commonNickName[nickName]);
  });

  // 중복제거 및 정렬
  answer = [...new Set(answer)].sort();
  return answer;
};

module.exports = problem6;
