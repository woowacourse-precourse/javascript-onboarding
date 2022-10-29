// 이메일 형식 체크
function checkIsEmail(email) {
  let regex = /[a-z0-9]+@email.com/;

  const checkEmail = email.filter(v => {
    if (regex.test(v) && v.length < 20) return v;
  });

  return checkEmail;
}

// 중복 글자 체크
function checkOverlap(forms) {
  const words = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length; j++) {
      const word = forms[i][1].slice(j, j + 2);
      const test = forms.filter(([_, name]) => word.length !== 1 && name.includes(word));
      if (test.length >= 2 && !words.includes(word)) words.push(word);
    }
  }

  return words;
}


function problem6(forms) {
  const overlapWords = checkOverlap(forms);

  const checkNames = forms.filter(([email, name]) => {
    if (overlapWords.some(v => name.includes(v))) return email;
  })

  const answer = checkNames.map(([email, _]) => email);

  return checkIsEmail(answer).sort();
}

module.exports = problem6;
