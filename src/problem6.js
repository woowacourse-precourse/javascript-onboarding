function problem6(forms) {
  let answer = [];
  if (Error(forms)) answer = "예외 사항";

  else{
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
}

// 예외 사항
function Error(forms){
  if (!(1 <= forms.length && forms.length <= 10000)) // 크루 1명 이상 10,000명 이하가 아닌 경우
    return true;

  for (let i = 0 ; i < forms.length ; i++){
    if (!(11 <= forms[i][0].length && forms[i][0].length < 20))// 이메일 전체 길이는 11자 이상 20자 미만이 아닌 경우
      return true;
    
    if (!(forms[i][0].match(/@email.com$/g) && forms[i][0].match(/@email.com$/g).length === 1)) // email.com 도메인이 아닌 경우
      return true;

    if (!(forms[i][1].match(/[가-힣]/g) && forms[i][1].match(/[가-힣]/g).length === forms[i][1].length)) // 닉네임이 한글이 아닌 경우
      return true;

    if (!(forms[i][1].length >= 1 && forms[i][1].length < 20))
      return true;
    // 닉네임 전체 길이가 1자 이상 20자 미만이 아닌경우
  }
}

module.exports = problem6;
