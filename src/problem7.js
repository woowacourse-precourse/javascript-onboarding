function problem7(user, friends, visitors) {
  let realFriend = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user))
      friends[i][0] == user
        ? realFriend.push(friends[i][1])
        : realFriend.push(friends[i][0]);
  } //user 친구가 저장된 배열 realFriend 생성.

  let friendScore = new Map();
  for (let i = 0; i < friends.length; i++) {
    if (!friends[i].includes(user)) {
      if (
        realFriend.includes(friends[i][0]) &&
        !realFriend.includes(friends[i][1])
      )
        friendScore.get(friends[i][1])
          ? friendScore.set(friends[i][1], friendScore.get(friends[i][1]) + 10)
          : friendScore.set(friends[i][1], 10);
      if (
        !realFriend.includes(friends[i][0]) &&
        realFriend.includes(friends[i][1])
      )
        friendScore.get(friends[i][0])
          ? friendScore.set(friends[i][0], friendScore.get(friends[i][0]) + 10)
          : friendScore.set(friends[i][0], 10);
    }
  }
  for (let i = 0; i < visitors.length; i++) {
    if (!realFriend.includes(visitors[i])) {
      if (friendScore.get(visitors[i]))
        friendScore.set(visitors[i], friendScore.get(visitors[i]) + 1);
    else friendScore.set(visitors[i], 1);
    }
  }
  let new_FriendScore = new Map([...friendScore].sort((a, b) => b[1] - a[1]));
  var answer = Array.from(new_FriendScore.keys()).slice(0, 5);
  return answer;
}

module.exports = problem7;
