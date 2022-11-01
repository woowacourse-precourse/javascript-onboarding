function problem6(forms) {
  let answer = [];
  let nameList = [];

  forms = getValidateForms(forms);

  forms.forEach((form) => {
    let splitedNameSet = new Set();
    const [email, nickname] = form;

    for (let i = 2; i <= nickname.length; i++) {
      for (let j = 0; j < nickname.length - 1; j++) {
        splitedNameSet.add(nickname.slice(j, j + i));
      }
    }
    nameList.push([form, [...splitedNameSet]]);
  });

  for (let i = 0; i < nameList.length; i++) {
    const [aEmail, aName] = nameList[i][0];
    const a = nameList[i][1];
    for (let j = i + 1; j < nameList.length; j++) {
      const [bEmail,bName] = nameList[j][0];
      const b = nameList[j][1];
      a.forEach((x) => {
        if (b.includes(x)) {
          answer.push(aEmail, bEmail);
        }
      });
    }
  }

  return [...new Set(answer)].sort();
}

function getValidateForms(forms) {
  return forms.filter((form) => {
    const [email, nickname] = form;
    const regex = "email.com";

    return email.match(regex) && nickname.match(/[ㄱ-ㅎ가-힣]+/gi);
  });
}

console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]));

module.exports = problem6;
