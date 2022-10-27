function problem6(forms) {
  let nicknames = [];
  // email 확인 절차 필요
  forms.forEach((array) => nicknames.push(array[1]));
  console.log(nicknames);

  let duplication = [];
  for (let i = 0; i < nicknames.length; i++) {
    const keyword = nicknames[i].slice(0, 2);
    for (let j = i + 1; j < nicknames.length; j++) {
      if (nicknames[j].includes(keyword)) {
        duplication.push(nicknames[i]);
        duplication.push(nicknames[j]);
      }
    }
  }
  console.log(duplication);

  // set을 이용한 중복 제거
  let unique = new Set();
  duplication.forEach((value) => unique.add(value));
  let uniqueTransferArr = Array.from(unique);

  let answer = [];
  uniqueTransferArr.forEach((uniqueNickname, index) => {
    nicknames.forEach((nickname, index) => {
      if (nickname === uniqueNickname) answer.push(forms[index][0]);
    });
  });
  answer.sort();
  console.log(answer);

  return answer;
}

problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);

module.exports = problem6;

/* test cases
  describe("problem6", () => {
    test("case1", () => {
      expect(
        problem6([
          ["jm@email.com", "제이엠"],
          ["jason@email.com", "제이슨"],
          ["woniee@email.com", "워니"],
          ["mj@email.com", "엠제이"],
          ["nowm@email.com", "이제엠"],
        ])
      ).toEqual(["jason@email.com", "jm@email.com", "mj@email.com"]);
    });
  });
*/
