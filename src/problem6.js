function getUserName(userInfo) {
  const userNameArr = [];

  userInfo.map((user) => userNameArr.push(user[1]));

  return userNameArr;
}
function problem6(forms) {
  var answer;
  const userNameArr = getUserName(forms);
  return answer;
}

module.exports = problem6;
