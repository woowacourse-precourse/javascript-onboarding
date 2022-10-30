function problem6(forms) {
  return forms
    .filter(duplicateNickname)
}

function duplicateNickname([,nickname], idx, origin) {
  return origin.some(([, comparisonTarget], compareIdx) => {
    if (comparisonTarget === nickname && compareIdx === idx) return false;
    return (
      subNickname(nickname, 2)
        .filter(hasSubstring(comparisonTarget))
        .length !== 0
    );
  });
}


function hasSubstring(comparisonTarget) {
  return (substring) => comparisonTarget.includes(substring);

}

function subNickname(nickname, length) {
  let res = [];
  for (let i = 0; i <= nickname.length - length; i++) {
    res.push(nickname.slice(i, length + i));
  }
  return res;
}

module.exports = problem6;
