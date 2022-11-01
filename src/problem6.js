const getPartialStr = (str) => {
  const res = [];
  let limit = 2;
  while (limit <= str.length) {
    const output = [];
    let index = 0;
    while (true) {
      const seperated = [...str].slice(index, index + limit).join("");
      index += 1;
      if (limit > seperated.length) break;
      output.push(seperated);
    }
    limit += 1;
    res.push(...output);
  }

  return res;
};

const getDuplicatedUser = (arr) => {
  let index = 0;
  let position = 1;
  const res = [];
  while (index !== arr.length - 1) {
    const set = new Set([...arr[index], ...arr[position]]);
    if (set.size !== arr[index].length + arr[position].length) {
      res.push(...arr[index].slice(-1), ...arr[position].slice(-1));
    }
    position += 1;
    // if (position > arr.length) break;
    if (position === arr.length) {
      index += 1;
      position = index + 1;
    }
  }
  return [...new Set(res)];
};

function problem6(forms) {
  if (!forms.length || forms.length > 10000) throw new RangeError('크루는 1명 이상 10,000명 이하이여야 합니다.');

  const users = {};
  forms.forEach((form) => {
    users[form[1]] = form[0];
  });
  const nicknames = forms.map((nickname) => nickname[1]);
  const partialStrs = nicknames.map((nickname) => getPartialStr(nickname));
  const selectedUsers = getDuplicatedUser(partialStrs);

  return selectedUsers.map((selectedUser) => users[selectedUser]).sort();
}

const input = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
];

module.exports = problem6;
