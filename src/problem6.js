function problem6(forms) {
  const nickNameArr = getNickNameArr(forms);
}

const getNickNameArr = (forms) => {
  return forms.map((item) => item[1]);
};

module.exports = problem6;
