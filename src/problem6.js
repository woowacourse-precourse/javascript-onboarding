const isValidNameFormat = (name) => {
  const nameRegExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,19}$/;

  return nameRegExp.test(name);
};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
