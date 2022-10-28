// 기능 목록
// 1. 이메일 예외처리
// 2. 닉네임 예외처리
// 3. 이메일, 닉네임을 따로 분리하여 각각 리스트에 저장
// 4. 닉네임 리스트를 순회하여 중복되는 닉네임 인덱스를 확인 및 저장
// 5. 중복된 인덱스에 따라 이메일을 반환
// 6. 중복되는 경우가 2가지 이상인 경우 -> 리스트를 개수에 맞게 반환

// 정규식을 통해 닉네임 예외처리
function exceptionNick(nick){
  // 닉네임에 자음 or 모음만 들어갈 경우가 아닌 오직 한글로 이루어진 경우만 확인
  const nickRegExp = new RegExp("[가-힣]+$");
  // 닉네임 정규식 및 길이 확인
  return nickRegExp.test(nick) && nick.length >= 1 && nick.length < 20?true:false;
}

// 정규식을 통해 이메일 예외처리
function exceptionEmail(email) {
  // 'RFC 5322 형식 + email.com'으로 이메일 확인
  const emailRegExp = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@email.com");
  // 정규식에 및 길이 확인
  return emailRegExp.test(email) && email.length >= 11 && email.length < 20?true:false;
}

function problem6(forms) {
  let answer;
  // 예외처리 할 form을 저장할 리스트
  let forms_list = [];

  for([email, nick] of forms){
    // 이메일, 닉네임 예외처리
    const check_email = exceptionEmail(email);
    const check_nick = exceptionNick(nick);
    // 예외처리가 됐다면 리스트에 저장
    if(check_email && check_nick) forms_list.push([email, nick]);
  }
  
  return answer;
}

module.exports = problem6;