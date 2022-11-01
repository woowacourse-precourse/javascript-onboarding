// for문에서 반드시 괄호 확인하기 ->너무 꼬여서 for문 두뭉치로 분리
function problem6(forms) {
  let answer = [];
  let result = new Set();

  for (let i = 0; i < forms.length; i++) {
    let words = forms[i][1];
    for (let j = 1; j < words.length; j++) {
      let test = words[j - 1] + words[j];
      for (let k = i + 1; k < forms.length; k++) {
        if (forms[k][1].indexOf(test) !== -1) {
          result.add(forms[k][0]);
          result.add(forms[i][0]);
        }
      }
    }
  }
  for (let final of result) {
    answer.push(final);
  }

  return answer.sort();
}

module.exports = problem6;
