function problem6(forms) {
  var answer = [];

  
  //제한사항
  //크루 인원 제한
  if(forms.length < 1 || forms.length > 10000){ 
    return -1;
  }
  
  //이메일 형식 제한
  let check_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  for(let e = 0; e < forms.length; e++){  
    if(check_email.test(forms[e][0]) == false){
      return -1;
    } else if(forms[e][0].length < 11 || forms[e][0].length >= 20){
      return -1;
    }
  }
 
  //닉네임 형식 제한
  let check_name = /^A-Za-z/g; 
  for(let n = 0; n < forms.length; n++){  
    if(check_name.test(forms[n][1]) == true){
      return -1;
    } else if(forms[n][1].length < 1 || forms[n][1].length >= 20){
      return -1;
    }
  }

  //닉네임 같은 글자 중복 찾기
  for (let A_index = 0; A_index < forms.length; A_index++) {
    A = forms[A_index];
      for (let B_index = A_index + 1; B_index < forms.length; B_index++) {
      B = forms[B_index];
      for (let i = 0; i < A[1].length - 1; i++) {
        const Astr = A[1].substr(i, i+2);
        if(B[1].includes(Astr)){  //중복제거
          if(!answer.includes(A[0])) answer.push(A[0]);
          if(!answer.includes(B[0])) answer.push(B[0]);
          break;
        }
      }
    }
  }
  answer.sort();

  console.log(answer);

  return answer;
}

//테스트 케이스
problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]);


module.exports = problem6;
