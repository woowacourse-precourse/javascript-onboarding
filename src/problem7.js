function problem7(user, friends, visitors) {
  let EMPTY_ARRAY = [];
  let EMPTY_OBJECT = {};

  const findUserFriends = friends.map(friendList => friendList.includes(user) && friendList);
  const userFriendsArray = [].concat(...findUserFriends.filter(Boolean)).filter(name => name !== user);

  return answer;
}

module.exports = problem7;
