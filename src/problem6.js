function problem6(forms) {
  let answer;
  const arr = [];
  // 배열의 있는 모든 요소들을 비교한다.
  for (let i = 0; i < forms.length - 1; i++) {
    for (let k = i + 1; k < forms.length; k++) {
      // 기준이 되는 문자열에서 연속되는 두 문자가 비교되는 문자열에 포함되는지 체크한다.
      for (let a = 0; a < forms[i][1].length - 1; a++) {
        const regex = new RegExp(`${forms[i][1][a]}${forms[i][1][a + 1]}`, "g");
        // 만약 문자열에 포함된다면 arr 배열에 기준 배열과 대상 배열 모두 push한다.
        if (regex.test(forms[k][1])) {
          arr.push(forms[i][0]);
          arr.push(forms[k][0]);
        }
      }
    }
  }
  // arr배열의 중복을 제거하고 오름차순으로 정렬한다.
  answer = [...new Set(arr)].sort();
  return answer;
}
module.exports = problem6;
