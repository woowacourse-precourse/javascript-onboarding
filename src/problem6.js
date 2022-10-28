/*
[x] 단어를 포개서 자르는 기능을 구현한다.
[x] 중복된 닉네임을 사용하는 유저를 찾는 기능을 구현한다.
[x] 중복된 닉네임을 사용하는 유저들을 반환한다.
*/

function overlapWord(word) {
  const slicedWords = [];
  for (let index = 0; index < word.length - 1; index += 1) {
    const slicedWord = word.slice(index, index + 2);
    slicedWords.push(slicedWord);
  }
  return slicedWords;
}

function makeDuplicatedUserTable(forms) {
  const userTable = {};
  for (const [email, nickname] of forms) {
    const slicedNicknames = overlapWord(nickname);
    for (const slicedNickname of slicedNicknames) {
      if (!userTable[slicedNickname]) {
        userTable[slicedNickname] = new Set();
      }
      userTable[slicedNickname].add(email);
    }
  }
  return userTable;
}

function problem6(forms) {
  const userTable = makeDuplicatedUserTable(forms);
  const duplicatedUserEmails = new Set();
  for (const emailSets of Object.values(userTable)) {
    const emails = [...emailSets];
    if (emails.length > 1) {
      for (const email of emails) {
        duplicatedUserEmails.add(email);
      }
    }
  }
  return [...duplicatedUserEmails].sort();
}

module.exports = problem6;
