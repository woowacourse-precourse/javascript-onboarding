function problem6(forms) {
  const nickNameList = forms.map((form) => {
    const nickName = form[1];
    nickNameList.push(nickName);
  });

  return nickNameList;
}

module.exports = problem6;
