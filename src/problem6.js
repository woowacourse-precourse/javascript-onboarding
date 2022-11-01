function problem6(forms) {
  var answer;
  var nameArr = [];
  var emailArr = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      nameArr.push(forms[i][1].substr(j, 2));
    }
  }

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const equalnameArr = nameArr.filter(
        (item) => item == forms[i][1].substr(j, 2)
      );

      if (equalnameArr.length > 1) {
        emailArr.push(forms[i][0]);
      }
    }
  }
  answer = emailArr.sort();
  return answer;
}

module.exports = problem6;
