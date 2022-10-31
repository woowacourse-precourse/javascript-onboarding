function getUserName(userInfo) {
  const userNameArr = [];
  userInfo.map((user) => userNameArr.push(user[1]));
  return userNameArr;
}

function cutUserName(userNameArr) {
  const cutUserNameArr = [];

  userNameArr.map((userName) => {
    for (let i = 0; i < userName.length; i++) {
      if (userName.slice(i, i + 2).length === 2) {
        const cutName = userName.slice(i, i + 2);
        cutUserNameArr.push(cutName);
      }
    }
  });

  return cutUserNameArr;
}

function findDuplicateUserWord(cutUserNameArr) {
  const duplicateUserWord = [];

  while (cutUserNameArr.length > 0) {
    let userName = cutUserNameArr.pop();
    if (cutUserNameArr.includes(userName)) {
      duplicateUserWord.push(userName);
    }
  }

  return [...new Set(duplicateUserWord)];
}
function problem6(forms) {
  var answer;
  const userNameArr = getUserName(forms);
  const cutUserNameArr = cutUserName(userNameArr);
  const duplicateUserWordArr = findDuplicateUserWord(cutUserNameArr);
  return answer;
}

module.exports = problem6;
