function problem6(forms) {
  let answer;
  let emailList = [];
  forms.forEach((form) => {
    let nickName = form[1];
    for (let i = 0; i < forms.length; i++) {
      for (let j = 0; j < nickName.length - 1; j++) {
        if (form === forms[i]) {
          continue;
        }
        if (
          !emailList.includes(forms[i][0]) &&
          forms[i][1].includes(nickName.substr(j, 2))
        ) {
          emailList.push(forms[i][0]);
        }
      }
    }
  });
  return answer;
}

module.exports = problem6;
