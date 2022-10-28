const setNicknameObj = (form, nicknameObj) => {
  const nickname = form[1];
  for (let i = 0; i < nickname.length; i += 1) {
    const subStr = nickname.substring(i, i + 2);
    if (subStr in nicknameObj) {
      nicknameObj[subStr] += 1;
    } else nicknameObj[subStr] = 1;
  }
}

const problem6 = (forms) => {
  const result = [];
  const nicknameObj = {};
  forms.map((form) => {
    setNicknameObj(form, nicknameObj);
  })
}

problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]);

module.exports = problem6;
