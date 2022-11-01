/**
 * 기능 정의
 *
 * - [x] 조건에 맞는 이메일과 닉네임을 가진 양식인지 판별하는 기능
 * - [ ] 크루들의 닉네임에서 중복되는 단어들을 찾는 기능
 * - [ ] 중복되는 단어를 가진 닉네임을 가진 크루들의 이메일을 찾는 기능
 * - [ ] 이메일들의 중복을 없애고 오름차순으로 정렬하는 기능
 */
/**
 * 신청받은 닉네임 중 같은 글자가 연속적으로 포함되는 닉네임을 작성한 지원자들의
 * 이메일 목록을 반환하는 함수
 *
 * @param {string[][]} forms [이메일, 닉네임] 형식의 문자열 배열들이 담긴 배열
 *  - 1이상 10,000이하의 길이 배열
 *  - 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만
 * - 닉네임은 한글만 가능하며 1자 이상 20자 미만
 * @returns {string[]} 오름차순으로 정렬되고 중복이 없는 이메일 목록
 */
function problem6(forms) {
  const validForms = validateForms(forms);

  var answer;
  return answer;
}

/**
 * 입력받은 양식들을 검증하는 함수
 * - 이메일이 적합한 도메인을 가졌는지, 길이가 조건에 맞는지 판별
 * - 닉네임이 한글인지, 적합한 길이를 가졌는지 판별
 *
 * @param {string[][]} forms [이메일, 닉네임] 형식의 문자열 배열들이 담긴 배열
 * @returns {string[]} 각 형식에 부합하는 양식들을 반환
 */
function validateForms(forms) {
  return forms.filter(([email, nickname]) => {
    return isValidEmail(email) && isValidNickname(nickname);
  });
}

/**
 * 이메일이 적합한 도메인을 가졌는지, 길이가 조건에 맞는지 판별하는 함수
 *
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const VALID_DOMAIN = "email.com";

  const [_, domain] = email.split("@");
  const length = email.length;

  return 11 <= length && length <= 20 && domain === VALID_DOMAIN;
}

/**
 * 닉네임이 한글인지, 적합한 길이를 가졌는지 판별하는 함수
 *
 * @param {string} nickname
 * @returns
 */
function isValidNickname(nickname) {
  const nicknameLength = nickname.length;

  return isHanguel(nickname) && 1 <= nicknameLength && nicknameLength < 20;
}

/**
 * 입력받은 문자열이 한글인지 판별하는 함수
 *
 * @param {string} string
 * @returns
 */
function isHanguel(string) {
  const regex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;

  return regex.test(string);
}

module.exports = problem6;
