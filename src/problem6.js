function restrictions(form) {
  if (!form[0].includes("@email.com") || form[1].length < 2) {
    return false;
  }
  return true;
}

function findNameOverlap(forms, i, answer) {
  for (let j = 0; j < forms[i][1].length - 1; j++) {
    for (let k = j + 1; k < forms[i][1].length; k++) {
      let word = forms[i][1].slice(j, k + 1);
      for (let s = 0; s < forms.length; s++) {
        if (s === i) {
          continue;
        }
        if (forms[s][1].includes(word) && answer.indexOf(forms[s][0]) === -1) {
          answer.push(forms[s][0]);
        }
      }
    }
  }
}

function problem6(forms) {
  var answer = [];

  for (let i = 0; i < forms.length; i++) {
    // 이메일에 "@email.com"인지 확인, 이름 길이가 2 이상인지 확인
    if (!restrictions(forms[i])) {
      continue;
    }
    // 각 이름 처음 2 글자부터 연속되는 이름이 있는지 확인
    findNameOverlap(forms, i, answer);
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
