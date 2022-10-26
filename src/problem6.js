/**
 * 기능 목록
 * 1. form 데이터를 입력 받는다.
 * 2. form 배열 첫 번째 크루의 두 글자로 이루어진 문자열들을 배열에 저장한다.
 * 3. 나머지 크루들의 닉네임에 첫 번째 크루의 문자열이 하나라도 포함된다면 첫 번째 크루의 이메일을 result에 추가한다.
 * 4. form 배열을 순회한다.
 *   4-1. 크루의 닉네임을 두 글자 씩 순회한다.
 *   4-2. 두 글자로 이루어진 문자열이 Set 객체에 존재하면 크루의 이메일을 result에 추가한다.
 *   4-3. 두 글자로 이루어진 문자열이 Set 객체에 존재하지 않으면 Set 객체에 문자열을 추가한다.
 * 5. result 배열의 중복을 제거한다.
 * 6. result 배열을 문자열 오름차순으로 정렬한다.
 * 7. result 배열을 return 한다.
 *
 * @param {Array<[string, string]>} forms
 * @returns {string[]} result
 */
function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
