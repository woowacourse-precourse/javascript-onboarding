function problem7(user, friends, visitors) {
  let EMPTY_ARRAY = [];
  let EMPTY_OBJECT = {};

  const findUserFriends = friends.map(friendList => friendList.includes(user) && friendList);
  const userFriendsArray = [].concat(...findUserFriends.filter(Boolean)).filter(name => name !== user);

  const removeUserFriends = friends.map(friendList => !friendList.includes(user) && friendList);

  for (let index = userFriendsArray.length; index--;) {
    EMPTY_ARRAY[index] = [].concat(
      ...removeUserFriends.filter(friend => friend !== false && friend.includes(userFriendsArray[index]))
    );
  }
  const mutualFriends = [].concat(...EMPTY_ARRAY);

  return answer;
}

module.exports = problem7;
