function popCrew (forms,checkNickname) {
  const result = forms.filter(crew => crew[1] !== checkNickname);
  return result;
}

function getDuplicateNicknames(forms){
  const duplNicknames = forms.filter(crew => crew[2])
  let result = [];
  duplNicknames.forEach(crew => result.push(crew[0]));
  result = [...new Set(result)].sort();
  return result;
}

function problem6(forms) {
  let answer = [];
  // 중복 여부 확인을 위한 값 추가
  forms.forEach(crew => crew[2] = false);
  

  answer = getDuplicateNicknames(forms);
  return answer;
}

module.exports = problem6;
