function problem6(forms) {
  const nameList = setName(forms);
  const emailList = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const equalNameList = nameList.filter(
        (item) => item == forms[i][1].substr(j, 2)
      );

      if (equalNameList.length > 1) {
        emailList.push(forms[i][0]);
      }
    }
  }
  return emailList.sort();
}

function setName(forms) {
  const array = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      array.push(forms[i][1].substr(j, 2));
    }
  }
  return array;
}

module.exports = problem6;
