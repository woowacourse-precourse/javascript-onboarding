function problem6(forms) {
  var temp = new Set([]); // 주어진 닉네임들을 두 글자 단위로 쪼갠 후 모두 저장해두는 배열.
  var warning_word = new Set([]); // 두 글자들 중 겹치는 글자를 저장해두는 배열.
  var answer = [];
  for (var i = 0; i < forms.length; i++) { /* 주어진 배열을 순회 */
    for (var j = 0; j < forms[i][1].length - 1; j++) { /* 배열 내 닉네임을 두 글자씩으로 쪼개서 접근 */
      if (temp.has(forms[i][1].substring(j, j + 2))) {
        warning_word.add(forms[i][1].substring(j, j + 2)); /* 겹치는 글자의 경우 warning_word에 저장 */
      } else temp.add(forms[i][1].substring(j, j + 2));
    }
  }
  for (var i = 0; i < forms.length; i++) {
    for (var j = 0; j < forms[i][1].length - 1; j++) { 
      if (warning_word.has(forms[i][1].substring(j, j + 2))) { /* warning_word에 있는 글자를 포함한다면 answer에 이메일 주소 저장 */
        answer.push(forms[i][0]);
      }
    }
  }

  return answer.sort();
}

module.exports = problem6;
