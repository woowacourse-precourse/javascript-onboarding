function problem6(forms) {
  /*
  기능 목록
  1. 크루의 닉네임과 이메일을 매핑한 객체 생성
  2. 크루의 닉네임을 순회하며 패턴 기록 및 알려진 패턴을 포함하고 있을 시 타겟에 추가
  3. 첫 타겟 크루 직전까지의 크루를 대상으로 재검사
  4. 타겟 크루들의 이메일 추출
  5. 이메일 중복 제거 및 오름차순 정렬하여 반환
  */
  
  const crew = {};
  for (i = 0; i < forms.length; i++) {
    crew[forms[i][1]] = forms[i][0];
  }

  // 같은 글자가 연속적으로 포함된 닉네임
  const target = [];
  // 2명 이상의 크루가 사용한 연속 패턴
  const targetPattern = [];
  // 모든 연속 패턴
  const pattern = [];

  // 크루의 닉네임을 순회하며 패턴 기록 및 알려진 패턴을 포함하고 있을 시 target에 추가
  for (i = 0; i < forms.length; i++) {
    const name = forms[i][1];
    for (j = 0; j < name.length - 1; j++){
      const slice = name.substr(j, 2);
      if (pattern.includes(slice)) {
        target.push(name);
        targetPattern.push(slice);
      }
      else pattern.push(slice);
    }
  }

  // 첫 타겟 크루 직전까지의 크루를 대상으로 재검사
  const firstTargetIndex = forms.findIndex(v => v[1] === target[0]);
  for (i = 0; i < firstTargetIndex; i++){
    const name = forms[i][1];
    for (j = 0; j < name.length - 1; j++){
      const slice = name.substr(j, 2);
      if (targetPattern.includes(slice)) target.push(name);
    }
  }
}

module.exports = problem6;
