function getDuplicateNicknames(forms){
  const duplNicknames = forms.filter(crew => crew[2])
  let result = [];
  duplNicknames.forEach(crew => result.push(crew[0]));
  result = [...new Set(result)].sort();
  return result;
}

function problem6(forms) {
  let answer = [];
  // 중복 제거 확인용 변수 추가
  forms.forEach(crew => crew[2] = false);

  forms.forEach(function(crew,idx){
    let nickname = crew[1];
    // 배열에 대한 반복
    for (let i = idx+1; i<forms.length; i++){
      let checkNick = forms[i][1]
      // 중복확인문자에 대한 반복
      for (let j = 0; j<nickname.length-1; j++){
        let checkIdx = checkNick.indexOf(nickname[j])
        if(checkIdx >= 0 && checkIdx < checkNick.length-1){
          if(checkNick[checkIdx+1]===nickname[j+1]){
            forms[i][2] = true;
            crew[2] = true;
            break;
          } 
        } break;
      }
    }
  })

  answer = getDuplicateNicknames(forms);
  return answer;
}

module.exports = problem6;
