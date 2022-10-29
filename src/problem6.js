/*
[기능 목록]
1. 이메일 형식 체크
2. 연속된 중복문자 체크
3. 닉네임 한글 체크
4. 연속된 중복문자가 없는 이메일 중 중복된 이메일 제거하고 오름차순 정렬한 결과 반환

- 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주한다.
- 크루는 1명 이상 10,000명 이하이다.
- 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
- result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다.
*/

function checkEmailFormat(email){
  if(email.length < 11 || email.length >= 20){
    return false;
  }
  if(email.indexOf('email.com') === -1){
    return false;
  }
  return true;
}

function checkNickname(name){
  let pattern3 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글
  if(pattern3.test(name)){
    return true;
  }
  return false;
}

function problem6(forms) {
  let answer;
  // answer = checkEmailFormat(forms[0][0]);
  answer = checkNickname(forms[0][1]);
  console.log(answer);
  return answer;
}

problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], 
["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ])
// ["jason@email.com", "jm@email.com", "mj@email.com"]

module.exports = problem6;
