function problem6(forms) {
  let answer = new Set();
  let dict = {};
  for (let i = 0; i < forms.length; i++) {
    let nickname = forms[i][1];
    dict = makeCase(nickname, dict);
  }
  for (let i = 0; i < forms.length; i++) {
    let nickname = forms[i][1];
    if (findOverlap(nickname, dict)) {
      answer.add(forms[i][0]);
    }
  }
  answer = Array.from(answer).sort();
  return answer;
}

function makeCase(nickname, dict) {
  for (let i = 0; i < nickname.length - 1; i++) {
    const subcase = nickname.substring(i, i + 2);
    if (dict[subcase]) {
      dict[subcase] += 1;
    } else {
      dict[subcase] = 1;
    }
  }
  return dict;
}

function findOverlap(nickname, dict) {
  let flag = false;
  for (let i = 0; i < nickname.length - 1; i++) {
    const subcase = nickname.substring(i, i + 2);
    if (dict[subcase] > 1) {
      flag = true;
    }
  }
  return flag;
}

module.exports = problem6;
