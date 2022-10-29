const NickNameChecker = {
  forms: [],
  result: [],
  inputForms: function (forms) {
    if (!this.checkForms(forms)) {
      return false;
    }
    forms = forms.filter((form) => this.checkFormEmail(form[0]));
    if (!forms.every((form) => this.checkNickname(form[1]))) {
      return false;
    }
    return true;
  },
  checkForms: function (forms) {
    if (!this.checkFormsLength(forms)) {
      return false;
    }
    return true;
  },
  checkFormsLength: function (forms) {
    return forms.length >= 1 && forms.length <= 10000;
  },
  checkFormEmail: function (emailString) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailString.test(mailformat)) return false;
    return emailString.test(/@email.com/);
  },
  checkNickname: function (nickname) {
    for (let i = 0; i < nickname.length; i++) {
      let c = v.charAt(i);
      if (c < "가" || c > "힣") return false;
    }
    return nickname >= 1 && nickname <= 20;
  },
};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
