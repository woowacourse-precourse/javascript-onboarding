// 중복 글자 체크
function checkOverlap(nickname) {
  const arr = [];

  for (let i = 0; i < nickname.length; i++) {
    const standard = nickname[i].slice(i, i + 2);
    const expectSelf = nickname.filter(v => v !== nickname[i]);
    if (expectSelf.some(v => v.includes(standard))) arr.push(standard);
  }

  return arr.filter(v => v !== '');
}


function problem6(forms) {
  const answer = [];
  const nickname = forms.map(([_, id]) => id);

  const OverlapWord = checkOverlap(nickname);

  forms.forEach(([email, name]) => {
    if (OverlapWord.some(v => name.includes(v))) answer.push(email);
  })

  return answer.sort();
}

module.exports = problem6;
