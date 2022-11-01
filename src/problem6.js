function problem6(forms) {
  var answer;
  // for(let i = 0; i<forms.length ;i++){

  // }
  const resultEmail = [];
  forms.forEach((form, formIdx) => {
    const nickName = form[1];
    const nickNameArr = nickName.split("");
    nickNameArr.push(-1);
    nickNameArr.forEach((nickNameChar, nickNameArrIdx) => {
      if (
        nickNameArr[nickNameArrIdx + 1] === -1 ||
        nickNameArr[nickNameArrIdx] === -1
      ) {
        return 0;
      }
      compareWord = nickNameArr
        .slice(nickNameArrIdx, nickNameArrIdx + 2)
        .join("");
      console.log(compareWord);
      for (let idx = formIdx + 1; idx < forms.length; idx++) {
        const targetNickName = forms[idx][1];
        if (targetNickName.includes(compareWord)) {
          resultEmail.push(forms[formIdx][0]);
          resultEmail.push(forms[idx][0]);
        }
      }
    });
  });
  const resultEmailSet = new Set(resultEmail);
  const resultEmailArr = Array.from(resultEmailSet);
  answer = resultEmailArr.sort();

  return answer;
}

module.exports = problem6;
