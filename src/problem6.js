function problem6(forms) {
  let answer;
  answer = findDuplicate(forms);
  return answer;
}

function findDuplicate(list) {
  let student = [];
  let nicknameList = [];
  let stack = "";
  let errEmail = [];
  list.map((v) => {
    // 각 닉네임을 리스트에 담아 놓음
    student.push(v);
    student.map((value) => {
      nicknameList.push(value[1] + "?|");
      nicknameList = [...new Set(nicknameList)];
    });
  });

  student.map((v, i) => {
    // 담겨진 리스트를 활용해 정규표현식을 사용해 중복인지 체크 후 체크 되었다면 errEmail 로 push
    const copiedList = [...nicknameList];
    copiedList.splice(i, 1);

    const strNickname = copiedList.join("");
    const confirm = strNickname.split("");
    confirm.splice(-1, 1);

    stack = v[1];
    console.log(stack);
    const regEx = new RegExp(confirm.join(""), "g");
    if (stack.search(regEx) >= 0) {
      errEmail.push(student[i][0]);
      console.log(errEmail);
    }
  });
  errEmail.sort();
  return errEmail;
}

module.exports = problem6;
