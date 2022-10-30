function problem6(forms) {
  const answer = checkForms(forms);
  return answer;
}

/* 크루는 1~10000명 */
/*  닉네임 두글자씩 끊어서
      1. map1에 (key: 자른 닉네임, value: email)로 set
      2. 또 다른 map2에 (key: email, value: 0(count))로 set
    만약 substring이 이미 map1에 존재한다면 해당 substring의 email의 map2 count를 올려줌
      그리고 현재 email은 answer에 포함
    모든 과정이 완료되면 map2를 순회하며 answer에 포함되지 않은 email을 answer에 추가한다.
    중복 삭제 후 종료.
*/
function checkForms(forms) {
  const crewList = [];
  const map1 = new Map();
  const map2 = new Map();

  forms.forEach(function(form) {
    if (isProperForm(form) === false) return;

    const [email, nickname] = form;
    for(let i = 0 ; i <= nickname.length - 2 ; i++) {
      const subNickname = getSubNickname(nickname, i);
      const existEmail = map1.get(subNickname);
      if (existEmail === undefined) {
        map1.set(subNickname, email);
        map2.set(email, 0);
      } else {
        map2.set(existEmail, 1);
        if (crewList.includes(email) === false) crewList.push(email);
      }
    }
  });

  map2.forEach(function(value, key) {
    if (value === 1) crewList.push(key);
  });

  crewList.sort();
  return crewList;
}

/* 2글자 분리 함수 */
function getSubNickname(nickname, idx) {
  return nickname.substr(idx, 2);
}

/* 양식 확인 함수 */
function isProperForm(form) {
  const [email, nickname] = form;
  return isProperEmail(email) && isProperNickname(nickname);
}

/* 이메일 양식 확인 함수 (11~19자) */
function isProperEmail(email) {
  if (email.length < 11 || email.length > 19) return false;
  return email.match(/^[a-zA-Z0-9]*@email.com$/) === null ? false : true;
}

/* 닉네임 확인 함수 (한글만 가능, 1~19자) */
function isProperNickname(nickname) {
  if (nickname.length < 1 || nickname.length > 19) return false;
  return nickname.match(/^[ㄱ-ㅎ가-힣]*$/) === null ? false : true;
}

module.exports = problem6;
