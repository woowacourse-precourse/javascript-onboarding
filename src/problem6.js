/**
 * 기능 정의
 *
 * - [x] 조건에 맞는 이메일과 닉네임을 가진 양식인지 판별하는 기능
 * - [x] 크루들의 닉네임에서 중복되는 단어들을 찾는 기능
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
  const duplicateKeywords = findDuplicateWords(validForms);

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

/**
 * 지원한 양식의 닉네임들 중 중복되는 단어들을 찾아주는 함수
 * - 중복의 기준은 같은 글자가 연속적으로 포함되는 경우
 * - 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주
 *
 * @param {string[][]} forms [이메일, 닉네임] 형식의 문자열 배열들이 담긴 배열
 * @returns {string[]} 중복되는 글자들이 담긴 배열
 */
function findDuplicateWords(forms) {
  const words = getTwoLetterWordsFromNickname(forms);
  const wordCounts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(wordCounts)
    .filter(([_, value]) => value > 1)
    .map(([key]) => key);
}

/**
 * 닉네임으로부터 연속되는 두 글자들의 조합을 구하는 함수
 *
 * @param {string[][]} forms [이메일, 닉네임] 형식의 문자열 배열들이 담긴 배열
 * @returns {string[]} 닉네임으로부터 뽑아낸 두 글자들이 담긴 배열
 */
function getTwoLetterWordsFromNickname(forms) {
  return forms.reduce((words, [_, nickname]) => {
    words.push(...getCombinations(nickname, 2));
    return words;
  }, []);
}

/**
 * 기존 문자열에서 지정한 수의 글자만큼 조합을 구하는 함수
 * - 단, 연속된 글자의 조합만을 구함
 *
 * @param {string[]} string 조합을 뽑아낼 문자열 배열
 * @param {number} selectNumber 몇 글자의 단어들을 찾을 것인지
 * @returns {string[]} 조건에 해당하는 문자열 배열
 */
function getCombinations(string, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return [...string].map((element) => element);
  }

  [...string].forEach((current, index, origin) => {
    const rest = origin.slice(index + 1);
    const [next, _] = getCombinations(rest, selectNumber - 1);

    if (next) {
      const attacehd = current + next;
      results.push(attacehd);
    }
  });

  return results;
}

module.exports = problem6;
