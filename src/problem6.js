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

const problem6 = (forms) => {
  const answer = [];
  const commonNickName = {};

  return answer;
};

module.exports = problem6;
