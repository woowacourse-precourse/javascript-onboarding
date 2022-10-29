const isEmail = function (text) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return text.match(mailformat);
};

const NickNameChecker = {
  forms: [],
  result: [],
  inputForms: function (forms) {
    if (!this.checkForms(forms)) {
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
};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
