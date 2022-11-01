function problem6(forms) {
  var answer = [];
  if (vaildInput(forms)) return;
  for(let i = 0; i<forms.length; i++){
    let nickname = forms[i][1];
    for(let j = 0; j< nickname.length; j++){
      let sliceNickname = nickname.slice(j, j+2); // nickname 두글자씩 자름
      if(sliceNickname.length === 1) {
        continue;
      }
      for(let k = 0; k < forms.length; k++){
        if(k === i){
          continue;
        }
        if(forms[k][1].includes(sliceNickname)){
          if(!answer.includes(forms[k][0])){ // 중복처리
            answer.push(forms[k][0]);
          }
        }
      }
    }
  }
  return answer.sort();
}

function validEmail(email){ //email 형식 및 글자 제한 체크
  const regExp = /^[a-zA-Z0-9]([-_\.]?[0-9a-zA-Z])*@email.com$/;
  if(email.length >= 11 && email.length <20 && regExp.test(email)){
    return 1;
  }
  return -1;
}

function validNickname(nickname){ //nickname 형식 및 글자 제한 체크
  const regExp = /^[가-힣]+$/;
  if(nickname.length >=1 && nickname.length < 20 && regExp.test(nickname)){
    return 1;
  }
  return -1;
}

function vaildInput(forms){ // email 과 nickname 의 형식 체크
  for(let i = 0; i<forms.length; i++){
    if(!validEmail(forms[i][0])){ //email의 형식이 잘못됨
      return 1;
    }
    if(!validNickname(forms[i][1])){ //nickname의 형식이 잘못됨
      return 1;
    }
  }
}

module.exports = problem6;
