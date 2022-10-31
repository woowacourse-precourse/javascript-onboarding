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

function findDuplicateUser(duplicateUserWordArr, forms) {
  const duplicatedUser = [];

  for (let user of forms) {
    let username = user[1];
    duplicateUserWordArr.map((word) => {
      username.includes(word) ? duplicatedUser.push(user) : "";
    });
  }
  return [...new Set(duplicatedUser)];
}

function problem6(forms) {
  var answer;
  const userNameArr = getUserName(forms);
  const cutUserNameArr = cutUserName(userNameArr);
  const duplicateUserWordArr = findDuplicateUserWord(cutUserNameArr);
  const duplicateUserArr = findDuplicateUser(duplicateUserWordArr, forms);
  return answer;
}

module.exports = problem6;
