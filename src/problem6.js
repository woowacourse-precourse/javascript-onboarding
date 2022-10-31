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

  const duplicateCollector = forms => {

    const duplicateForms = [];

    for(let i=0 ; i < forms.length ; i++){

      const stringArr = forms[i][1].split("");

      for(let j=0 ; j < stringArr.length-1 ; j++){

        string = stringArr[j] + stringArr[j+1];
        const formsForInput = []
        
        for(let k=i+1 ; k < forms.length ; k++){
          if(forms[k][1].indexOf(string) !== -1 && duplicateForms.indexOf(forms[k][0]) === -1) {
            formsForInput.push(forms[k][0]);
          }
        }

        if(formsForInput.length !== 0) {
          formsForInput.push(forms[i][0]);
        }
        
        duplicateForms.push(...formsForInput);
      }
    }
    duplicateForms.sort();

    return duplicateForms;
  };

  const filteredForms = singleNickNameDeleter(forms);
  const duplicateForms = duplicateCollector(filteredForms);

  answer = duplicateForms;

  return answer;
}

module.exports = problem6;


