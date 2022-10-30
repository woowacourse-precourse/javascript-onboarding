const EMAIL = "email";
const NICKNAME = "nickname";

function problem6(forms) {
  return forms
    .filter(duplicateNickname)
    .map(getUsers(EMAIL))
    .filter(toUnique)
    .sort();
}

function duplicateNickname(user, idx, origin) {
  let nickname = getUsers(NICKNAME)(user);
  return origin.some((comparisonTarget, compareIdx) => {
    let comparisonCrewNickname = getUsers(NICKNAME)(comparisonTarget)
    if (comparisonCrewNickname === nickname && compareIdx === idx) return false;
    return (
      subNickname(nickname, 2)
        .filter(hasSubstring(comparisonTarget))
        .length !== 0
    );
  });
}

function getUsers(item) {
  if (item === EMAIL) return ([email]) => email;
  return ([, nickname]) => nickname;
}

function toUnique(email, idx, origin) {
  return origin.indexOf(email) === idx;
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
