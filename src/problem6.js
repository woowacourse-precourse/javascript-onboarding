/*
 * -- 기능 목록 --
 * 1. 첫 글자를 key값으로, 이후 나온 2번째 글자와 해당 단어로 신청한 사람의 이메일을 저장하는 객체 - dictionary
 * dictionary = {
 *   "제": {
 *     "이": "jm@email.com",
 *     "엠": "nowm@email.com",
 *   }
 * }
 *
 * 2. 겹치는 닉네임 조각을 소유한 이메일들을 저장하는 세트 - duplicateNicknameEmailSet
 * 3. 이메일과 닉네임이 조건에 맞는지 확인하는 함수 - isValid([email, nickname])
 * 4. 겹치는 닉네임 조각이 있는지 반환하며, dictionary를 업데이트 하는 함수 - isDuplicateWord
 * 5. 이름을 두 글자 단위로 모아 isDuplicateWord를 실행하는 함수 - checkNickname(nickname)
 */

function isValid([email, nickname]) {
  const emailRegExp = /^[\w]{1,9}@email.com$/;
  const nicknameRegExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,19}$/;

  if (!emailRegExp.test(email)) return false;
  if (!nicknameRegExp.test(nickname)) return false;
  return true;
}

function isDuplicateWord([firstLetter, secondLetter], email, dictionary) {
  // 첫 글자가 등록되지 않은 경우
  if (!dictionary[firstLetter]) {
    dictionary[firstLetter] = { [secondLetter]: email };
    return false;
  }

  // 첫 글자에 이어 두 번째 글자가 등록되지 않은 경우
  if (!dictionary[firstLetter][secondLetter]) {
    dictionary[firstLetter][secondLetter] = email;
    return false;
  }

  return true;
}

function checkNickname(
  [email, nickname],
  dictionary,
  duplicateNicknameEmailSet
) {
  // 한 명의 닉네임 내에서 중복이 발생해도 허용하게끔 nickname을 자른 값들을 Set으로 저장
  const words = new Set();
  for (let i = 0; i < nickname.length - 1; i++) {
    words.add(nickname.slice(i, i + 2));
  }

  words.forEach(([firstLetter, secondLetter]) => {
    if (isDuplicateWord([firstLetter, secondLetter], email, dictionary)) {
      // 자른 값이 이미 사전에 등록되어 겹치는 부분이 존재한다면, 두 이메일을 전부 결과값에 저장
      duplicateNicknameEmailSet.add(dictionary[firstLetter][secondLetter]);
      duplicateNicknameEmailSet.add(email);
    }
  });
}

function problem6(forms) {
  const dictionary = {};
  const duplicateNicknameEmailSet = new Set();

  forms.forEach((form) => {
    if (!isValid(form)) return;
    checkNickname(form, dictionary, duplicateNicknameEmailSet);
  });

  const answer = Array.from(duplicateNicknameEmailSet).sort();
  return answer;
}

module.exports = problem6;
