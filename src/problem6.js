function problem6(forms) {
  const map1 = new Map();
  forms.forEach(function (item) {
    map1.set(item[1], item[0]);
  });

  const nickName = [];
  const person2 = [];
  forms.forEach(function (item) {
    nickName.push(item[1]);
  });

  nickName.forEach(function (oneName) {
    for (i = 0; i <= oneName.length - 1; i++) {
      newWord = oneName[i] + oneName[i + 1];
      nickName.forEach(function (person) {
        if (person === oneName) {
        } else if (person.includes(newWord)) {
          person2.push(map1.get(person));
        }
      });
    }
  });
  const set = new Set(person2);
  const answer = [...set];
  answer.sort();
  return answer;
}

module.exports = problem6;
/*
a = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
];
problem6(a);
*/
