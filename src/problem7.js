function problem7(user, friends, visitors) {
  let userFriends = [];
  let friendsMap = new Map();
  // 친구 목록 초기화
  friends.forEach((friend) => {
    if (friend[0] === user) userFriends.push(friend[1]);
    else if (friend[1] === user) userFriends.push(friend[0]);

    if (!friendsMap.has(friend[0])) friendsMap.set(friend[0], 0);
    if (!friendsMap.has(friend[1])) friendsMap.set(friend[1], 0);
  });

  // 방문 기록
  visitors.forEach((visitor) => {
    if (!friendsMap.has(visitor)) friendsMap.set(visitor, 1);
    else friendsMap.set(visitor, friendsMap.get(visitor) + 1);
  });

  friends.forEach((friend) => {
    if (userFriends.includes(friend[0]))
      friendsMap.set(friend[1], friendsMap.get(friend[1]) + 10);

    if (userFriends.includes(friend[1]))
      friendsMap.set(friend[0], friendsMap.get(friend[0]) + 10);
  });

  friendsMap.delete(user);
  userFriends.forEach((friend) => {
    friendsMap.delete(friend);
  });

  friendsMapToArray = Array.from(friendsMap);
  friendsMapToArray.sort(([a, scoreA], [b, scoreB]) => scoreB - scoreA);
  friendsMapToArray.sort(([nameA, scoreA], [nameB, scoreB]) =>
    scoreA === scoreB ? nameA - scoreB : scoreB - scoreA
  );

  let result = friendsMapToArray.filter(([name, cnt]) => cnt > 0);
  return result.splice(0, 5).map(([name, cnt]) => name);
}

module.exports = problem7;
