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
    return emailString.match(/@email.com/);
  },
};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
