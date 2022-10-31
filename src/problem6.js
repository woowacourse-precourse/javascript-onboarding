function problem6(forms) {

  // 닉네임 별로 연속적인 글자를 담아줄 배열 생성
  let checkMemo = [];

  // 중복이 확인된 닉네임을 담아줄 배열 생성
  let repeatedNameFirst = [];

  // 0번째 인덱스를 제외한 나머지 값의 중복 확인
  for(let el of forms) {
    let nickname = el[1];
    for(let i = 0; i < nickname.length-1; i++) {
      let checkNameFirst = nickname[i] + nickname[i+1];
      if(checkMemo.includes(checkNameFirst)) repeatedNameFirst.push(el);
      else checkMemo.push(checkNameFirst);
    } 
  }

  // 0번째 인덱스의 중복 확인
  let nicknameFinal = forms[0][1];
    for(let i = 0; i < nicknameFinal.length-1; i++) {
      let checkNameFinal = nicknameFinal[i] + nicknameFinal[i+1];
      if(checkMemo.includes(checkNameFinal)) repeatedNameFirst.push(forms[0]);
    } 

  // 중복이 확인된 닉네임의 중복 제거
  let dedup = [...new Set(repeatedNameFirst)];

  // 중복이 확인된 닉네임의 이메일만 담아줄 배열 생성 후 푸시
  let result = [];
  for(let el of dedup) {
    result.push(el[0]);
    }

  // 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬 후 리턴
  return result.sort();
}

module.exports = problem6;
