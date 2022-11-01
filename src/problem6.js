/*
 * <기능 목록>
 * 1. 이메일과 닉네임이 포함된 2차원 배열에서 닉네임만을 포함한 배열을 반환하는 getNickname() 함수.
 * 2. 모든 닉네임에서 모든 연속된 글자를 Object 타입으로 반환하는 getEverySeqLetters() 함수.
 *     이 때, Object의 keys는 연속된 두 글자이고 values는 연속된 두 글자가 나타난 횟수이다.
 * 3. 연속된 글자 Object에서 연속된 두 글자가 나타난 횟수(value)가 2 이상인 연속된 두 글자(key)만을 반환하는 findDuplicatedLetters() 함수.
 * 4. 입력받은 연속된 두 글자를 포함하는 닉네임의 인덱스 리스트를 반환하는 findIndexOfNickname() 함수.
 *     이 때, 해당되는 연속된 두 글자를 포함하는 닉네임이 하나인 경우는 포함하지 않는다. (한 닉네임에 연속글자가 중복으로 들어가 있는 경우는 닉네임 중복에 포함하지 않는다.)
 * 5. 주어진 인덱스에 해당하는 이메일 리스트를 반환하는 findEmail() 함수.
 */

function problem6(forms) {
  if (!isValidInput(forms)) {
    console.log("Error: Invalid Input");
    return -1;
  }

  const validForms = getValidForms(forms);
  const nicknames = getNickname(validForms);
  const seqLettersDuplicated = findDuplicatedLetters(
    getEverySeqLetters(nicknames)
  );
  const nicknameIndexes = findIndexOfNicknames(nicknames, seqLettersDuplicated);
  const emails = findEmails(validForms, nicknameIndexes).sort();

  return emails;
}

function isValidInput(forms) {
  let isValid;
  if (!(forms.length >= 1 && forms.length <= 10000)) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
}

function getValidForms(forms) {
  let validForms = [];
  let invalidForms = [];
  let isValid = true;
  for (let [email, nickname] of forms) {
    if (!(email.length >= 11 && email.length < 20)) {
      isValid = false;
    } else if (email.slice(-10) !== "@email.com") {
      isValid = false;
    } else if (!(nickname.length >= 1 && nickname.length < 20)) {
      isValid = false;
    } else {
      isValid = true;
    }
    if (isValid) {
      validForms.push([email, nickname]);
    } else {
      invalidForms.push([email, nickname]);
    }
  }
  if (invalidForms.length !== 0) {
    printInvalidForms(invalidForms);
  }

  return validForms;
}

function printInvalidForms(invalidForms) {
  console.log("---- Check invalid forms ----");
  invalidForms.forEach((form) => console.log(form));
  console.log("-----------------------------");

  return 0;
}

function getNickname(forms) {
  let nicknames = [];
  for (let form of forms) {
    nicknames.push(form[1]);
  }

  return nicknames;
}

function getEverySeqLetters(nicknames) {
  let seqLettersCount = {};
  let seqLetters = "";

  for (let nickname of nicknames) {
    for (let i = 0; i < nickname.length - 1; i++) {
      seqLetters = nickname.slice(i, i + 2);
      if (seqLettersCount[seqLetters]) {
        seqLettersCount[seqLetters]++;
      } else {
        seqLettersCount[seqLetters] = 1;
      }
      seqLetters = "";
    }
  }

  return seqLettersCount;
}

function findDuplicatedLetters(seqLettersCount) {
  let seqLettersDuplicated = [];
  for (let seqLetters of Object.keys(seqLettersCount)) {
    if (seqLettersCount[seqLetters] >= 2) {
      seqLettersDuplicated.push(seqLetters);
    }
  }

  return seqLettersDuplicated;
}

function findIndexOfNicknames(nicknames, seqLettersDuplicated) {
  let nicknameIndexes = [];
  let nicknameCount = 0;
  for (let seqLetters of seqLettersDuplicated) {
    for (let i = 0; i < nicknames.length; i++) {
      if (nicknames[i].includes(seqLetters)) {
        nicknameIndexes.push(i);
        nicknameCount++;
      }
    }
    if (nicknameCount < 2) {
      nicknameIndexes = nicknameIndexes.slice(0, -1);
    }
    nicknameCount = 0;
  }
  nicknameIndexes = [...new Set(nicknameIndexes)];
  return nicknameIndexes;
}

function findEmails(forms, nicknameIndexes) {
  let emails = [];
  for (let i = 0; i < forms.length; i++) {
    if (nicknameIndexes.includes(i)) {
      emails.push(forms[i][0]);
    }
  }
  return emails;
}

module.exports = problem6;
