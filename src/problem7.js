function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

// 내 친구 체크
function findFriends(user, friendsList) {
  let result = [];
  for (let i = 0; i < friendsList.length; i++) {
    if (friendsList[i].includes(user)) {
      result.push(friendsList[i].filter((name) => name !== user).join(""));
    }
  }
  return result;
}

module.exports = problem7;
