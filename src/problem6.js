function problem6(forms) {

  function checkException(crew){
    const email = crew[0];
    const nickName = crew[1];
    const regexForEmail = /.+@email.com/;
    const regexForNickName = /[^ㄱ-ㅎ가-힣]+/;

    //글자 수 제한에 걸린 경우
    if (email.length < 11 || email.length >= 20) return 3;
    if (nickName.length < 1 || nickName.length >= 20) return 4;

    //이메일 형식이 틀린 경우
    if (!(regexForEmail.test(email))) return 1;

    //닉네임이 한글이 아닌 경우
    if (regexForNickName.test(nickName)) return 2;
    
    return 0;
  }

  for (let idx = 0; idx < forms.length; idx++){
    if (checkException(forms[idx]) === 1) return `이메일 형식이 틀립니다: ${forms[idx][0]}`;
    if (checkException(forms[idx]) === 2) return `닉네임이 한글이 아닙니다: ${forms[idx][1]}`;
    if (checkException(forms[idx]) === 3) return `이메일의 글자 수를 확인해주세요: ${forms[idx][0]}`;
    if (checkException(forms[idx]) === 4) return `닉네임의 글자 수를 확인해주세요: ${forms[idx][1]}`;
  }

  const result = [];
  for (let i = 0; i < forms.length; i++){
    const testCrew = forms.shift();
    if (result.includes(testCrew[0])) continue;
    for (let idx = 0; idx < testCrew[1].length - 1; idx++){
      const testStr = testCrew[1].slice(idx, idx + 2);
      const repeatedNames = forms.filter(x => x[1].indexOf(testStr) !== -1);
      if (repeatedNames.length > 0){
        result.push(testCrew[0]);
        for (let crew of repeatedNames){
          if (!(result.includes(crew[0]))) result.push(crew[0]);
        }
      }
    }
  }

  return result.sort();
}

module.exports = problem6;
