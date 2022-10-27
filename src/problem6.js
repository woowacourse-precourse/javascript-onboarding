/**
 * @function problem6
 * @description
 * 우아한테크코스에서는 교육생(이하 크루) 간 소통 시 닉네임을 사용한다.
 * 간혹 비슷한 닉네임을 정하는 경우가 있는데, 이러할 경우 소통할 때 혼란을 불러일으킬 수 있다.
 * 혼란을 막기 위해 크루들의 닉네임 중 같은 글자가 연속적으로 포함 될 경우 해당 닉네임 사용을 제한하려 한다.
 * 이를 위해 같은 글자가 연속적으로 포함되는 닉네임을 신청한 크루들에게 알려주는 시스템을 만들려고 한다.
 * 신청받은 닉네임 중 같은 글자가 연속적으로 포함 되는 닉네임을 작성한 지원자의 이메일 목록을 return 하도록 solution 메서드를 완성하라.
 * @param {[string, string][]} [forms]
 * @return {(string[])} 신청받은 닉네임 중 같은 글자가 연속적으로 포함 되는 닉네임을 작성한 지원자의 이메일 목록을 return
 * @throws 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주한다.
 * @throws 크루는 1명 이상 10,000명 이하이다.
 * @throws 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
 * @throws 신청할 수 있는 이메일은 email.com 도메인으로만 제한한다.
 * @throws 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
 * @thorws result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다.
 * @todo 1. 두 글자 이상의 문자가 연속적으로 순서에 맞춰 포함하는지 판별하는 함수
 * @todo 2. 이메일 검증 함수
 * @todo 3. 닉네임 검증 함수
 * @todo 4. 결과 배열을 오름차순으로 정렬하여 리턴해주는 함수
 */

function problem6(forms) {
  var answer;
  return answer;
}

function vaildateEmailDomain(email) {
  if (email.match(/email+\.com/)) return true;
  return false;
}

function vaildateEmailLength(email) {
  if (email.length >= 11 && email.length < 20) return true;
  return false;
}

function getSplitNickname(nickname) {
  return nickname
    .split("")
    .map((_, start) =>
      Array.from({ length: start + 1 }).map((_, length) =>
        nickname.slice(start, start + 2 + length)
      )
    )
    .flat()
    .filter((string) => string.length >= 2);
}

function removeRepeatString(arr) {
  return Array.from(new Set(arr));
}

module.exports = problem6;
