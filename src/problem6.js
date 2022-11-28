class Exception {
  except(forms) {
    const acceptData = forms.filter((form) => {
      return this.isKorean(form[1]);
    });
    return acceptData;
  }

  isKorean(nickName) {
    const sample = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let check = true;
    nickName.split("").forEach((letter) => {
      if (!sample.test(letter)) check = false;
    });
    return check;
  }
}

class System {
  constructor() {
    this.forms = [];
    this.info = {};
    this.usedNickName = {};
  }

  inspect(forms) {
    this.forms = forms;
    this.storeData();
    let refuseData = this.forms.filter((form) => {
      const nickName = form[1];
      return this.checkNickName(nickName);
    });
    return this.getEmail(refuseData);
  }

  storeData() {
    this.forms.forEach((data) => {
      const [email, nickName] = data;
      this.info[nickName] = email;
      this.storeUsedLetter(nickName);
    });
  }

  storeUsedLetter(nickName) {
    for (let i = 0; i < nickName.length - 1; i++) {
      this.checkLetter("store", nickName[i], nickName[i + 1]);
    }
  }

  checkNickName(nickName) {
    for (let i = 0; i < nickName.length - 1; i++) {
      if (this.checkLetter("duplicate", nickName[i], nickName[i + 1]))
        return true;
    }
    return false;
  }

  checkLetter(order, frontLetter, backLetter) {
    const letter = frontLetter + backLetter;
    switch (order) {
      case "store":
        if (this.usedNickName[letter]) this.usedNickName[letter] += 1;
        else this.usedNickName[letter] = 1;

      case "duplicate":
        if (this.usedNickName[letter] > 1) return true;
        return false;
    }
  }

  getEmail(refuseData) {
    const emails = refuseData.map((data) => {
      const nickName = data[1];
      return this.info[nickName];
    });
    const sortedEmail = this.sortEmail(emails);
    return this.deleteDupicate(sortedEmail);
  }

  sortEmail(email) {
    return email.sort();
  }

  deleteDupicate(emails) {
    return [...new Set(emails)];
  }
}

function problem6(forms) {
  const exception = new Exception();
  const vaildForms = exception.except(forms);
  const system = new System();
  return system.inspect(vaildForms);
}

module.exports = problem6;
