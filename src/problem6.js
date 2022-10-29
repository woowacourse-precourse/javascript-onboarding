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

function problem6(forms) {
  const nicknames = forms.map((nickname) => nickname[1]);
  const partialStrs = nicknames.map((nickname) => getPartialStr(nickname));
}

const input = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
];
problem6(input);

module.exports = problem6;
