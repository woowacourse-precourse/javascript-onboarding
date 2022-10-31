/*
function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
*/

forms= [ ["제이엠","jm@email.com"], ["jason@email.com", "제이슨ss"], ["woniee@emil.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠",4] ] 
//| ["jason@email.com", "jm@email.com", "mj@email.com"] |


// 한글 아스키 코드 검사
function checkHangle(c){
  if (c>=44032 && c<=55203) return true; // 가~힣=> 44032~55203
  if (c>=12593 && c<=12643) return true; // 자음=> 12593~12622, 모음=> 12623~12643
  return false;
}

function checkValid(forms){
  // 전체 리스트 길이 제한
  if (forms.length==0) return false;
  if (forms.length>10001){
    forms = forms.slice(0,10001);
  }

  let validForms = {}
  for(f of forms){
    // 길이가 2보다 크거나 작을 수 없음 
    if (f.length!=2) continue;

    // f[0]이 이메일이 아닐 경우
    if (f[0].includes("a")){
      email = f[0]
      nickname = f[1];
    }else{
      email = f[1] 
      nickname = f[0];
    }

    // 이메일은 도메인-email.com
    if (email.length<11 || email.length>20) continue; // 이메일 길이 제한
    e = email.split('@')
    if (e[1] != "email.com") continue; 

    // 닉네임은 한글만, 1<=length<20
    if (nickname.length<1 || nickname.length>20) continue; // 닉네임 길이 제한
    for (i in nickname){
      code = nickname.charCodeAt(i);
      console.log(code);
      if (!checkHangle(code)) continue;
    }

    validForms.email=nickname;
  }

  return validForms;
}

function solution(forms){
  let validF = checkValid(forms); // 객체로 반환 받음

  // 
  for(form of validF){
    for(f of form)
  }


}


//신청받은 닉네임 중 **같은 글자가 연속적으로 포함** 되는 닉네임을 작성한 지원자의 이메일 목록을 return 하도록 solution 메서드를 완성하라.


/*

4. 두 글자 이상의 문자가 연속적으로 중복되는 경우 찾기
5. result 리스트 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거함 
*/