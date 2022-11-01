function find(forms) {
  let tmpNick = new Set();
  let tmpEmail = new Set();

  forms.forEach((form) => {
    const [email, nickname] = form;
    for (let j = 1; j < nickname.length; j++) {
      const str = nickname.substr(j - 1, 2);
      if (tmpNick.has(str))
        tmpEmail.add(email);

      tmpNick.add(str);
    }
  });
  return [tmpNick, tmpEmail];
}

function problem6(forms) {
  let nickSet = new Set();
  let emailSet = new Set();

  [nickSet, emailSet] = find(forms);
  nickSet.clear();
  let emailArr = Array.from(emailSet);
  emailArr.forEach((email) => {
    forms.forEach((form) => {
      const [formEmail, formNickname] = form;
      if (email === formEmail) {
        for (let j = 1; j < formNickname.length; j++) {
          const str = formNickname.substr(j - 1, 2);
          nickSet.add(str);
        }
      }
    })
  });

  let answer = Array.from(emailSet);
  answer.sort();
  return answer;
}

module.exports = problem6;
