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

  Array.from(new Set(visitors), name => EMPTY_OBJECT[name] = 0); // 방문자도 object에 추가
  visitors.map(name => EMPTY_OBJECT[name] += 1); // 방문자 추천 점수 +1

  userFriendsArray.map(name => EMPTY_OBJECT[name] = 0); // 이미 친구면 추천 점수 0

  // 점수가 큰 순서대로 정렬, 같은 점수는 알파벳 순으로 정렬
  const sortObject = Object.entries(EMPTY_OBJECT).sort(([nameA, pointA], [nameB, pointB]) => {
    if (pointA > pointB) return -1;
    if (pointA < pointB) return 1;
    if (nameA < nameB) return -1;
    else return 1;
  });

  const upToFiveFriends = sortObject.slice(0, 5);

  const removeZeroPointFriends = upToFiveFriends.map(object => object[1] === 0 ? "" : object[0]);

  const answer = removeZeroPointFriends.filter(Boolean);

  return answer;
}

module.exports = problem7;
