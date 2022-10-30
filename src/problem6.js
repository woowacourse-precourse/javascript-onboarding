function problem6(forms) {
  let email = [];
  for (let i = 0 ; i < forms.length - 1 ; i++){ // forms 다 도는 for문
    let temp_nickname = forms[i][1] // 현재 닉네임
    let nickname = [] // 2글자씩 잘린 닉네임 넣기
    for (let j = 0 ; j < forms[i][1].length - 1 ; j++){ // 닉네임 2글자씩 잘라서 확인
      nickname.push(temp_nickname.slice(j, j + 2)) // 닉네임에 2글자씩 잘라서 넣기
      for (let k = i + 1 ; k < forms.length ; k ++){ // 해당 닉네임 다음부터 비교 for 문
        if (forms[k][1].includes(nickname)){  // 비교 대상 닉네임이 현재 닉네임 배열에 포함되면
          if (!email.includes(forms[i][0])) email.push(forms[i][0]); // 이메일 안에 현재 이메일이 없으면 넣기
          if (!email.includes(forms[k][0])) email.push(forms[k][0]); // 이메일 안에 비교 이메일이 없으면 넣기
          continue; // 이미 이메일 넣었으므로 다음으로 넘기기
        }
      }
    }
  }

  return email.sort((a, b) => a.localeCompare(b));  // 이메일 정렬한 값 리턴
}

module.exports = problem6;
