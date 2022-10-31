function problem7(user, friends, visitors) {
  var answer;
  return answer;
}
// 함께 아는 친구 체크
function findAcquaintance(user, friends, friendsList) {
  let findResult = {};
  for (let i = 0; i < friends.length; i++) {
    let allFriends = findFriends(friends[i], friendsList);
    let validFriends = allFriends.filter((name) => name !== user);
    for (let j = 0; j < validFriends.length; j++) {
      if (validFriends[j] in findResult) {
        findResult[validFriends[j]] = findResult[validFriends[j]] + 10;
      } else {
        findResult[validFriends[j]] = 10;
      }
    }
  }
  return findResult;
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
