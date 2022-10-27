/*
 * -- 기능 목록 --
 * 1. 첫 글자를 key값으로, 이후 나온 다음 글자들의 배열을 저장하는 객체 - dictionary
 * 2. 겹치는 닉네임 조각을 소유한 이메일들을 저장하는 배열 - duplicateNicknameEmailList
 * 3. 이메일과 닉네임이 조건에 맞는지 확인하는 함수 - isValid([email, nickname])
 * 4. 겹치는 닉네임 조각이 있다면 false를 반환하고, 아니라면 true를 반환하며 dictionary를 업데이트 하는 함수 - isDictionaryContain(word)
 * 5. 이름을 두 글자 단위로 모아 isDictionaryContain을 실행하는 함수 - checkNickname(nickname)
 */

function isValid([email, nickname]) {
  const emailRegExp = /^[\w]{1,9}@email.com$/;
  const nicknameRegExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,19}$/;

  if (!emailRegExp.test(email)) return false;
  if (!nicknameRegExp.test(nickname)) return false;
  return true;
}

function isDictionaryContain(word) {}

function checkNickname(nickname, dictionary, duplicateNicknameEmailList) {
  // 한 명의 닉네임 내에서 중복이 발생해도 허용하게끔 nickname을 자른 값들을 Set으로 저장
  const words = new Set();
  for (let i = 0; i < nickname.length - 1; i++) {
    words.add(nickname.slice(i, i + 2));
  }

  words.forEach((word) =>
    isDictionaryContain(word, dictionary, duplicateNicknameEmailList)
  );
}

function problem6(forms) {
  const dictionary = {};
  const duplicateNicknameEmailList = new Set();

  forms.forEach(([email, nickname]) => {
    if (!isValid([email, nickname])) return;
    checkNickname(nickname, dictionary, duplicateNicknameEmailList);
  });

  var answer;
  return answer;
}

module.exports = problem6;
