const getMatchedStr = (regExp, str) => {
  if (!regExp.test(str)) return '';
  return str.match(regExp)[0];
};

const isMatched = (regExp) => (str) => str === getMatchedStr(regExp, str);

function problem6(forms) {
  var answer;
  const isProperKorean = isMatched(/[가-힣]{1,19}/);
  const isProperEmail = isMatched(/.{1,9}@email.com$/);

  return answer;
}

module.exports = problem6;
