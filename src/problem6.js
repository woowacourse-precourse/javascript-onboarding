function problem6(forms) {
  // 이메일 및 닉네임 페턴 제한 체크 함수
  patternCheck(forms);
  // 빈배열 선언
  let result = [];
  // 중복체크 함수에 맞는것이 forms 배열에 있는지 확인
  // 중복체크 함수 안에 배열이 다수일경우 이중for문을 돌려 값추출
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < duplicateCheck(forms).length; j++) {
      if (forms[i][1].includes(duplicateCheck(forms)[j])) {
        //있으면 빈배열에 푸시
        result.push(forms[i][0]);
      }
    }
  }
  // 결과값을 오름차순으로 정렬
  let sortResult = result.sort();
  // 결과값
  return sortResult;

  //이메일 및 닉네임 페턴 체크 함수
  function patternCheck(forms) {
    // 닉네임이 한글인지 정규식 표현 (한글) 글자수 제한
    let pattern_korea = /^[가-힣]{1,20}$/;
    // 이메일이 도메인 확인 및 글자수 제한 (소문자만)
    let pattern_email = /^[a-z]{1,11}@email.com+$/;
    // forms 배열 갯수만큼 확인
    for (let i = 0; i < forms.length; i++) {
      // 형식이 맞지 않으면 제한내용 리턴후 종료
      if (
        !pattern_email.test(forms[i][0]) &&
        !pattern_korea.test(forms[i][1])
      ) {
        return "이메일 또는 닉네임의 형식이 맞지 않습니다!";
      }
    }
    return forms;
  }

  // 닉네임 두 글자 이상 문자가 연속적으로 나오는지 확인하는 함수
  function duplicateCheck(forms) {
    // 빈 배열 선언
    let nickextract = [];
    // forms의 배열 갯수만큼 닉네임 추출하여 빈배열에 푸시
    for (let i = 0; i < forms.length; i++) {
      nickextract.push(forms[i][1]);
    }
    // 중복 닉네임이 있는지 확인해서 넣는 값, 빈배열 선언
    let duplicateNick = [];
    // 추출된 닉네임에 각각에 대하여 추출하여 넣어줌
    for (let j = 0; j < nickextract.length; j++) {
      for (let k = 0; k < nickextract[j].length; k++) {
        duplicateNick.push(nickextract[j].slice(k, k + 2));
      }
    }
    // 추출한 값을 filter() 이용하여
    // 1. 글자수 2 이고 중복된 값만 먼저 추출
    // 2. 중복값을 다시 필터를 사용하여 남김
    return duplicateNick
      .filter((v, i) => v.length >= 2 && duplicateNick.indexOf(v) !== i)
      .filter((v, i, arr) => arr.indexOf(v) === i);
  }
}

module.exports = problem6;
