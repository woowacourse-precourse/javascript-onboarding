function problem6(forms) {
  var answer;

  const singleNickNameDeleter = forms => {

    const noSingleNickNameForms = [];

    forms.map(form => {
      if(form[1].length !== 1){
        noSingleNickNameForms.push(form)
      }
    })
    return noSingleNickNameForms;
  };

  return answer;
}

module.exports = problem6;
