function problem7(user, friends, visitors) {
  // user의 친구 찾기
  function findUserFriends(user, friends) {
    let friendsList = [];
    for (let friend of friends) {
      if (friend.includes(user)) {
        if (friend[0] !== user) {
          friendsList.push(friend[0]);
        }
        if (friend[1] !== user) {
          friendsList.push(friend[1]);
        }
      }
    }
    return friendsList;
  }

  let friend = findUserFriends(user, friends);
  console.log(friend);
}

module.exports = problem7;
