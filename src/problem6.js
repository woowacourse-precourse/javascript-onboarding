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
}

module.exports = problem6;
