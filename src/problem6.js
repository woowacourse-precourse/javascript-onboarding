function problem6(forms) {
  let nickname = [];
  let duplicateName = [];
  let resultArr = [];

  forms.forEach((str) => {
    for (let i = 0; i < str[1].length; i++) {
      if (nickname.includes(str[1].slice(i, i + 2)))
        duplicateName.push(str[1].slice(i, i + 2));
      else nickname.push(str[1].slice(i, i + 2));
    }
  });
  forms.forEach((str) => {
    for (let i = 0; i < str[1].length - 1; i++) {
      if (duplicateName.includes(str[1].slice(i, i + 2)))
        resultArr.push(str[0]);
    }
  });
  return resultArr.sort();
}

module.exports = problem6;
