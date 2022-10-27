/**아스키코드를 사용하여 풀이
 * A : 65, Z : 90 이므로 대문자 고려시 155
 * a : 97, z:  122 이므로 소문자 고려시 219
 * 양 사이드 아스키코드 합에서 문자의 코드값을 빼면 요구사항과 같이 변환 가능.
 */
function problem4(word) {
  var answer;
  let wordArray = word.split('');

  answer = wordArray.map((v) => {
    if (v >= 'A' && v <= 'Z') {
      return String.fromCharCode(155 - v.charCodeAt());
    } else if (v >= 'a' && v <= 'z') {
      return String.fromCharCode(219 - v.charCodeAt());
    } else {
      return v;
    }
  });
  return answer.join('');
}

module.exports = problem4;
