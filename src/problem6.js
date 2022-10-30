// 이메일 형식 체크
function checkIsEmail(email) {
  let regex = /[a-z0-9]+@email.com/;

  return email.filter(v => regex.test(v) && v.length < 20);
}

// 중복 글자 체크
function checkOverlapWords(forms) {
  const words = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length; j++) {
      const word = forms[i][1].slice(j, j + 2);
      const searchOverlapWords = forms.filter(([_, name]) => word.length !== 1 && name.includes(word));
      if (searchOverlapWords.length >= 2 && !words.includes(word)) words.push(word);
    }
  }

  return words;
}


function problem6(forms) {
  const validWords = checkOverlapWords(forms);
  const checkNames = forms.filter(([_, name]) => validWords.some(v => name.includes(v)));
  const answer = checkNames.map(([email, _]) => email);

  return checkIsEmail(answer).sort();
}

module.exports = problem6;
