function problem6(forms) {
  return sortEmail(getEmail(forms));
}

const setUsers = (forms) => {
  const usersHashMap = new Map();
  forms.forEach((user) => {
    usersHashMap.set(user[1], user[0]);
  });
  return usersHashMap;
};

const getName = (forms) => {
  return forms.map((user) => user[1]);
};

const getEmail = (forms) => {
  const usersHashMap = setUsers(forms);
  return removeDuplicatedName(forms).map((name) => usersHashMap.get(name));
};

const sortEmail = (forms) => {
  return forms.sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    } else if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }
  });
};

const removeDuplicatedName = (forms, result = []) => {
  const usersNameHashMap = new Map();
  getName(forms).forEach((userName) => {
    for (let j = 0; j < userName.length - 1; j += 1) {
      const dividedUserName = userName.slice(j, j + 2);
      if (
        usersNameHashMap.has(dividedUserName) &&
        userName !== usersNameHashMap.get(dividedUserName)
      ) {
        result.push(userName, usersNameHashMap.get(dividedUserName));
      }
      usersNameHashMap.set(dividedUserName, userName);
    }
  });
  return Array.from(new Set(result));
};

module.exports = problem6;
