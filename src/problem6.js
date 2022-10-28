// 기능 목록
// 1. 이메일 예외처리
// 2. 닉네임 예외처리
// 3. 이메일, 닉네임을 따로 분리하여 각각 리스트에 저장
// 4. 닉네임 리스트를 순회하여 중복되는 닉네임 인덱스를 확인 및 저장
// 5. 중복된 인덱스에 따라 이메일을 반환
// 6. 중복되는 경우가 2가지 이상인 경우 -> 리스트를 개수에 맞게 반환

// 정규식을 통해 이메일 예외처리
function exceptionEmail(email) {
  // 'RFC 5322 형식 + email.com'으로 이메일 확인
  const regExp = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@email.com");
  // 정규식에 충족하면 true, 불충족하면 false 반환
  return regExp.test(email);
}

function problem6(forms) {
  let answer;

  for([email, nick] of forms){
    // 이메일 예외처리
    let check_email = exceptionEmail(email);
  }
  
  return answer;
}

module.exports = problem6;