/*
[x] 단어를 포개서 자르는 기능을 구현한다.
[x] 중복된 닉네임을 사용하는 유저를 찾는 기능을 구현한다.
[x] 중복된 닉네임을 사용하는 유저들을 반환한다.
*/

class UserFilter {
  userTable = {};
  constructor(forms) {
    this._makeInitUserTable(forms);
    this.duplicatedEmails = this._searchDuplicatedEmails();
  }

  _makeInitUserTable(forms) {
    for (const [email, nickname] of forms) {
      if (nickname.length === 1) {
        continue;
      }
      const slicedNicknames = this._overlapWord(nickname);
      for (const slicedNickname of slicedNicknames) {
        if (!this.userTable[slicedNickname]) {
          this.userTable[slicedNickname] = new Set();
        }
        this.userTable[slicedNickname].add(email);
      }
    }
    return this.userTable;
  }

  _overlapWord(word) {
    const slicedWords = [];
    for (let index = 0; index < word.length - 1; index += 1) {
      const slicedWord = word.slice(index, index + 2);
      slicedWords.push(slicedWord);
    }
    return slicedWords;
  }

  _searchDuplicatedEmails() {
    const duplicatedUserEmails = new Set();
    for (const emailSets of Object.values(this.userTable)) {
      const emails = [...emailSets];
      if (emails.length > 1) {
        for (const email of emails) {
          duplicatedUserEmails.add(email);
        }
      }
    }
    return [...duplicatedUserEmails];
  }
}

function problem6(forms) {
  const { duplicatedEmails } = new UserFilter(forms);
  return duplicatedEmails.sort();
}

module.exports = problem6;
