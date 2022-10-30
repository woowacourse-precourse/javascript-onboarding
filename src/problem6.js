function problem6(forms) {
  var answer;
  return answer;
}

function subNickname(nickname, length) {
  let res = [];
  for (let i = 0; i <= nickname.length - length; i++) {
    res.push(nickname.slice(i, length + i));
  }
  return res;
}

module.exports = problem6;
