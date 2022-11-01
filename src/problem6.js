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

  let answer = Array.from(emailSet);
  answer.sort();
  return answer;
}

module.exports = problem6;
