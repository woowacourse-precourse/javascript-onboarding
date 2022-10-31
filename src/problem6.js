function problem6(forms) {
  if (isValidateForms(forms) && isValidateName(forms) && isValidateEmail(forms)) {
    return sortEmail(removeDuplicatedName(forms));
  }
  return -1;
}

const sortEmail = (forms) => {
  return forms.sort();
};

const removeDuplicatedName = (forms, result = []) => {
  const usersNameHashMap = new Map();
  forms.forEach((user) => {
    for (let j = 0; j < user[1].length - 1; j += 1) {
      const dividedUserName = user[1].slice(j, j + 2);
      if (
        usersNameHashMap.has(dividedUserName) &&
        user[0] !== usersNameHashMap.get(dividedUserName)
      ) {
        result.push(user[0], usersNameHashMap.get(dividedUserName));
      }
      usersNameHashMap.set(dividedUserName, user[0]);
    }
  });
  return Array.from(new Set(result));
};

const isValidateForms = (forms) => {
  if (typeof forms !== 'object') {
    return false;
  }
  if (forms.length < 1 || forms.length > 10000) {
    return false;
  }
  return true;
};

const isValidateName = (forms) => {
  for (let i = 0; i < forms.length; i += 1) {
    const name = forms[i][1];
    if (!/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(name)) {
      return false;
    }
    if (name.length < 1 || name.length > 19) {
      return false;
    }
  }
  return true;
};

const isValidateEmail = (forms) => {
  for (let i = 0; i < forms.length; i += 1) {
    const email = forms[i][0];
    if (typeof email !== 'string') {
      return false;
    }
    if (email.length < 11 || email.length > 19) {
      return false;
    }
    if (!(email.includes('@email.com') && email.match(/@email.com/g).length === 1)) {
      return false;
    }
  }
  return true;
};

module.exports = problem6;
