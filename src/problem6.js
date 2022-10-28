function problem6(forms) {
  const emailArr = [];
  const nickNameObj = {};

  forms.map((item) => {
    const [email, nickName] = item;
    for (let i = 0; i < nickName.length - 1; i++) {
      const compareWord = nickName.substring(i, i + 2);
      if (compareWord in nickNameObj) {
        nickNameObj[compareWord] += 1;
      } else {
        nickNameObj[compareWord] = 1;
      }
    }
  });

  forms.map((item) => {
    const [email, nickName] = item;
    for (let compareWord in nickNameObj) {
      if (nickName.includes(compareWord) && nickNameObj[compareWord] > 1) {
        emailArr.push(email);
      }
    }
  });

  emailArr.sort();
  return emailArr;
}

module.exports = problem6;
