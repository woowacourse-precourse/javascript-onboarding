const MIN_LEN = 11;
const MAX_LEN = 19;
const SUBSTR_LEN = 2;
const IS_NOT_FOUND = 0;
const WILL_BE_ADDED = 1;

function problem6(forms) {
  const answer = checkForms(forms);
  return answer;
}

/* 크루는 1~10000명 */
/*  닉네임 두글자씩 끊어서
      1. subNicknameMap에 (key: 자른 닉네임, value: email)로 set
      2. 또 다른 emailMap에 (key: email, value: 0(count))로 set
    만약 substring이 이미 subNicknameMap에 존재한다면 해당 substring의 email의 emailMap count를 올려줌
      그리고 현재 email은 answer에 포함
    모든 과정이 완료되면 emailMap를 순회하며 answer에 포함되지 않은 email을 answer에 추가한다.
    중복 삭제 후 종료.
*/
function checkForms(forms) {
  let crewList = [];
  const subNicknameMap = new Map();
  const emailMap = new Map();

  forms.forEach(function(form) {
    if (isProperForm(form) === false) return;

    const [email, nickname] = form;
    for(let i = 0 ; i <= nickname.length - 2 ; i++) {
      const subNickname = getSubNickname(nickname, i);
      const existEmail = subNicknameMap.get(subNickname);
      if (existEmail === undefined) {
        subNicknameMap.set(subNickname, email);
        emailMap.set(email, IS_NOT_FOUND);
      } else {
        emailMap.set(existEmail, WILL_BE_ADDED);
        if (crewList.includes(email) === false) crewList.push(email);
      }
    }
  });
  emailMap.forEach(function(value, key) {
    if (value === 1) crewList.push(key);
  });

  crewList = [...new Set(crewList)];
  crewList.sort();
  return crewList;
}

/* 2글자 분리 함수 */
function getSubNickname(nickname, idx) {
  return nickname.substr(idx, SUBSTR_LEN);
}

/* 양식 확인 함수 */
function isProperForm(form) {
  const [email, nickname] = form;
  return isProperEmail(email) && isProperNickname(nickname);
}

/* 이메일 양식 확인 함수 (11~19자) */
function isProperEmail(email) {
  if (email.length < MIN_LEN || email.length > MAX_LEN) return false;
  return email.match(/^[a-zA-Z0-9]*@email.com$/) === null ? false : true;
}

/* 닉네임 확인 함수 (한글만 가능, 1~19자) */
function isProperNickname(nickname) {
  if (nickname.length < 1 || nickname.length > MAX_LEN) return false;
  return nickname.match(/^[ㄱ-ㅎ가-힣]*$/) === null ? false : true;
}

module.exports = problem6;
