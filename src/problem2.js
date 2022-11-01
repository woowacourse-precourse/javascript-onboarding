function problem2(cryptogram) {
  var input = cryptogram.toString();
  if (input.length == 1) return answer;
  while (true) {
    var answer = "";
    var count = 0; /* 문자열을 순회할 때마다 삭제되는 경우의 개수를 저장 */
    for (i = 0; i < input.length; i++) {
      if (i == 0) { /* 맨 앞자리의 경우 비교 */
        if (input[i] == input[i + 1]) {
          count++;
          continue;
        } else answer = answer.concat(input[0]);
      } else if (i == input.length - 1) { /* 맨 뒤자리의 경우 비교 */
        if (input[i] == input[i - 1]) {
          count++;
          continue;
        } else answer = answer.concat(input[i]);
      } else { /* 맨 앞 끝이 아닌 경우 비교 */
        if (input[i] == input[i - 1] || input[i] == input[i + 1]) {
          count++;
          continue;
        } else answer = answer.concat(input[i]);
      }
    }
    if (count == 0) break; /* 변경되는게 없다는 것은 암호가 모두 해독된 것이니 해독된 값을 리턴 */
    input = answer;
  }
  return answer;
}

module.exports = problem2;
