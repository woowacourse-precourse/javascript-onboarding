function problem6(forms) {
  let answer = [];
  let temp = [];
  let set;

  const passForms = checkRule(forms);
  const result = duplicate(passForms);
  
  if (result !== false) {
    set = new Set(result);
    temp = [...set];
    temp.map(([email, nickname]) => answer.push(email));
    answer.sort();
  }
  return answer;
}

function checkRule(forms) {
  let result = [];
  let regexForEmail = /[a-zA-Z0-9]{11,19}/;  // email check
  let regexForNick = /[ㄱ-ㅎㅏ-ㅣ가-힣]{1,19}/; // nickname check
  
  for (let i=0; i<forms.length; i++) {
    if (regexForEmail.test(forms[i][0]) == true || regexForNick.test(forms[i][1]))
      result.push(forms[i]);
  }

  return result;
}

function duplicate(passForms) {
  if (passForms.length <= 1)
    return false;

  let result = [];
  for (let i=0; i<=passForms.length-1; i++) {
    if (passForms[i][1].length <= 1)
      continue;
    
    for (let j=0; j<=passForms[i][1].length-2; j++) {
      const sliceNickName = passForms[i][1].slice(j, j+1);
      result = passForms.filter( ([email, nickname]) => nickname.includes(sliceNickName));

    }
  }

  return result;
}

module.exports = problem6;
