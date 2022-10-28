function problem6(forms) {
  let answer = [];
  let nameList = [];

  forms.forEach((form) => {
    let splitedNameSet = new Set();
    const [, nickname] = form;

    for (let i = 2; i <= nickname.length; i++) {
      for (let j = 0; j < nickname.length - 1; j++) {
        splitedNameSet.add(nickname.slice(j, j + i));
      }
    }
    nameList.push([form, [...splitedNameSet]]);
    console.log(splitedNameSet);
  });

  return answer;
}

console.log(
  problem6([
    ["jm@email.net", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

module.exports = problem6;
