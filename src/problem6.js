/**
 * Problem 6
 * 1. forms의 닉네임을 2글자 단위로 나눠가며 pair 정보 담을 Map의 key 생성
 *  1.1 생각해볼 수 있는 예외사항 : 2글자 이상 중복되는 경우는 이미 2글자 겹치는 경우로 포함
 * 2. 해당 key에 해당하는 이메일 @+도메인은 제거하고 Map의 value인 array에 push
 * 3. forms 순회를 마치고 pair 정보 담은 Map에서 value의 길이가 2일 경우 element들을 모두 Set에 add
 * 4. Set을 Array화 하고 정렬 수행
 * 5. 정렬된 배열에 element마다 @+도메인 추가해 반환
 * @param {[string, string][]} forms 이메일 11자 이상 20자 미만, 닉네임 1자 이상 20자 미만
 * @returns {string[]}
 */
function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
