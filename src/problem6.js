const NickNameChecker = {
  forms: [],
  result: [],
  sameValues: [],
  inputForms: function (forms) {
    if (!this.checkFormsLength(forms)) {
      return false;
    }
    forms = forms.filter((form) => this.checkEmailForm(form[0]));
    forms = forms.filter((form) => this.checkNickname(form[1]));
    return true;
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
    for (let i = 0; i < nickname.length; i++) {
      let c = v.charAt(i);
      if (c < "가" || c > "힣") return false;
    }
    return nickname >= 1 && nickname < 20;
  },
};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
