const getMatchedStr = (regExp, str) => {
  if (!regExp.test(str)) return '';
  return str.match(regExp)[0];
};

const isMatched = (regExp) => (str) => str === getMatchedStr(regExp, str);
const isProperKorean = isMatched(/[가-힣]{1,19}/);
const isProperEmail = isMatched(/.{1,9}@email.com$/);

function getAllCandidateWords(nickname) {
  const len = nickname.length;
  const candidateWords = new Set();

  for (let i = 0; i < len; i++) {
    let nickParts = nickname[i];

    for (let j = i + 1; j < len; j++) {
      nickParts += nickname[j];
      candidateWords.add(nickParts);
    }
  }

  return [...candidateWords];
}

function problem6(forms) {
  var answer = [];
  const emailMap = {};
  const resultSet = new Set();

  forms.forEach(([email, nickname]) => {
    if (!isProperEmail(email)) return;
    if (!isProperKorean(nickname)) return;

    const candidateWords = getAllCandidateWords(nickname);
  });

  return answer;
}

module.exports = problem6;
