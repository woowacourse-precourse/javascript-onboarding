function problem6(forms) {
  var answer;
  forms = forms.filter((form) => form[1].length > 1);
  return answer;
}

const splitNickname = (nickname) => {
  const splitedSet = new Set();
  for (let i = 0; i < nickname.length - 1; i++) {
    splitedSet.add(nickname.slice(i, i + 2));
  }
  return splitedSet;
};

module.exports = problem6;
