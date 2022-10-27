// 중복 글자 체크
function checkOverlap(nickname) {
  const arr = [];

  for (let i = 0; i < nickname.length; i++) {
    for (let j = 0; j < nickname[i].length; j++) {
      const standard = nickname[j].slice(j, j + 2);
      const expectSelf = nickname.filter(v => v !== nickname[j]);
      if (expectSelf.some(v => v.includes(standard))) arr.push(standard);
    }
  }

  return arr.filter(v => v !== '');
}


function problem6(forms) {
  const nickname = forms.map(([_, id]) => id);

  const overlapWords = checkOverlap(nickname);

  const answer = forms.filter(([email, name]) => {
    if (overlapWords.some(v => name.includes(v))) return email;
  })

  return answer.map(([email, _]) => email).sort();
}

module.exports = problem6;
