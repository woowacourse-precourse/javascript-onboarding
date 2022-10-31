function problem7(user, friends, visitors) {
  let userFriend = [];
  let friendScore = {};
  //friends 배열에서 사용자와 친구인 닉네임 찾기
  friends.map((item) => {
    if (item.includes(user)) {
      if (item[0] === user) {
        userFriend.push(item[1]);
      } else {
        userFriend.push(item[0]);
      }
    }
  });
  friends.map((item) => {
    userFriend.map((friend) => {
      if (item.includes(friend) && !item.includes(user)) {
        if (item[0] === friend && !userFriend.includes(item[1])) {
          if (!friendScore[item[1]]) {
            friendScore[item[1]] = 10;
          } else {
            friendScore[item[1]] += 10;
          }
        } else if (item[1] === friend && !userFriend.includes(item[0])) {
          if (!friendScore[item[0]]) {
            friendScore[item[0]] = 10;
          } else {
            friendScore[item[0]] += 10;
          }
        }
      }
    });
  });

  visitors.map((name) => {
    if (!userFriend.includes(name)) {
      if (!friendScore[name]) {
        friendScore[name] = 1;
      } else {
        friendScore[name] += 1;
      }
    }
  });
  return Object.keys(friendScore);
}

module.exports = problem7;
