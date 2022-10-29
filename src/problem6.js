/*
[기능 목록]
1. 이메일 형식 체크
2. 닉네임 한글 체크
3. 닉네임 중 같은 글자가 연속적으로 포함되는 닉네임 반환
4. 연속된 중복문자가 없는 이메일 중 중복된 이메일 제거하고 오름차순 정렬한 결과 반환
*/

function checkEmailFormat(forms){
  let email;
  for(let i = 0; i < forms.length; i++){
    email = forms[i][0];
    if(email.length < 11 || email.length >= 20){
      return false;
    }
    if(email.indexOf('email.com') === -1){
      return false;
    }
  }
  return true;
}

function checkNickname(forms){
  let korean_pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  let nickname;
  for(let i = 0; i < forms.length; i++){
    nickname = forms[i][1];
    if(!korean_pattern.test(nickname)){
      return false;
    }
  }
  return true;
}

function checkSequenceName(forms){

}


function getResult(result){
  const set = new Set(result);
  const new_result = Array.from(set);
  new_result.sort();
  return new_result;
}


function problem6(forms) {
  let answer;
  if(!checkEmailFormat(forms) || !checkNickname(forms)){
    return -1;
  }
  // checkSequenceName(forms);
  return answer;
}

problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], 
["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ])
// ["jason@email.com", "jm@email.com", "mj@email.com"]

module.exports = problem6;
