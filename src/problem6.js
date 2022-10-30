function popCrew (forms,checkNickname) {
  const result = forms.filter(crew => crew[1] !== checkNickname);
  console.log(result);
  return result;
}

function problem6(forms) {
  let answer = [];
  // 중복 여부 확인을 위한 값 추가
  forms.forEach(crew => crew[2] = false);
  

  // 출력값 중복 제거 훅 오름차순 정렬
  answer = [...new Set(answer)];
  answer.sort();
  return answer;
}

module.exports = problem6;
