const setNicknameObj = (form, nicknameObj) => {
  const nickname = form[1];
  for (let i = 0; i < nickname.length; i += 1) {
    const subStr = nickname.substring(i, i + 2);
    if (subStr in nicknameObj) {
      nicknameObj[subStr] += 1;
    } else nicknameObj[subStr] = 1;
  }
}

const getErrCrewEmail = (form, nicknameObj) => {
  const [email, nickname] = form;
  for (let i = 0; i < nickname.length - 1; i += 1) {
    const subStr = nickname.substring(i, i + 2);
    if (nicknameObj[subStr] >= 2) return email;
  }
  return null;
}

const problem6 = (forms) => {
  const result = new Set();
  const nicknameObj = {};

  forms.map((form) => {
    setNicknameObj(form, nicknameObj);
  });

  forms.map((form) => {
    const email = getErrCrewEmail(form, nicknameObj);
    if (email !== null) {
      result.add(email);
    }
  });
}

module.exports = problem6;
