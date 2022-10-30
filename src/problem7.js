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

  const concatenateAllSubArray = [].concat(...friends);
  concatenateAllSubArray.map((friend) => EMPTY_OBJECT[friend] = 0); // 모든 친구들을 object에 추가

  mutualFriends.map(name => EMPTY_OBJECT[name] += 10); // 공통 친구 추천 점수 +10

  return answer;
}

module.exports = problem7;
