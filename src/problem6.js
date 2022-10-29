const NickNameChecker = {
  forms: [],
  result: [],
  resultIndexs: [],
  seperatedNicknames: {},
  inputForms: function (forms) {
    if (!this.checkFormsLength(forms)) {
      return false;
    }
    forms = forms.filter((form) => this.checkEmailForm(form[0]));
    this.forms = forms.filter((form) => !this.checkNickname(form[1]));
    return true;
  },
  getOverlapEmails: function () {
    this.forms.forEach((form, index) => {
      this.overlapNicknames(form[1], index);
    });
    return this.resultIndexs;
  },
  overlapNicknames: function (nickname, index) {
    for (let i = 0; i < nickname.length - 1; i++) {
      let splicedNickname = nickname.slice(i, i + 2);
      if (!this.isOverlapNickname(splicedNickname)) {
        this.seperatedNicknames[splicedNickname] = index;
      } else {
        this.resultIndexs.push(index);
      }
    }
  },
  isOverlapNickname: function (nickname) {
    if (nickname in this.seperatedNicknames) {
      this.resultIndexs.push(this.seperatedNicknames[nickname]);
      return true;
    }
    return false;
  },
  checkFormsLength: function (forms) {
    return forms.length >= 1 && forms.length <= 10000;
  },
  checkEmailForm: function (emailString) {
    let mailformat = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    let mustMailFormat = new RegExp(/@email.com$/);
    if (!mailformat.test(emailString)) {
      return false;
    }
    return mustMailFormat.test(emailString);
  },
  checkNickname: function (nickname) {
    Array.from(nickname).forEach((char) => {
      if (char < "ㄱ" || char > "힣") {
        return false;
      }
    });
    return nickname >= 1 && nickname < 20;
  },
};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
