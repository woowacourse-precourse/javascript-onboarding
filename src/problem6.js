const NickNameChecker = {
  forms: [],
  result: [],
  inputForms: function (forms) {
    if (!this.checkForms(forms)) {
      return false;
    }
    forms = forms.filter((form) => this.checkFormEmail(form[0]));
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
};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
