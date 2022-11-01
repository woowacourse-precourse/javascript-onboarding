function problem6(forms) {
  const newForms = forms.filter(item => 1 < item[1].length);
  const email = findDuplicateNames(newForms).map(item => item[0]);
  return email.sort();
}
module.exports = problem6;

function findDuplicateNames(forms) {
  const duplicateArr = [];
  for(let i = 0; i < forms.length; i++) {
    const name = forms[i][1];
    for(let j = 0; j < name.length; j++) {
      if(name[j+1] === undefined) {
        break;
      }

      const words = name[j]+name[j+1];
      const duplicate = [];

      forms.forEach(el => {
        if(el[1].includes(words) === true) {
          duplicate.push(el);
        }
      });
      
      if(1 < duplicate.length) {
        for(let k = 0; k < duplicate.length; k++) {
          duplicateArr.push(duplicate[k]);
        }
      }
    }
  }

  const set = new Set(duplicateArr);
  const result = [...set];
  return result;
}