function problem7(user, friends, visitors) {
  let answer;

  const findFriendsOfUser = (user, friends) => {
    let arr = [];

    for (let i = 0; i < friends.length; i++) {
      if (friends[i][0] === user) {
        arr.push(friends[i][1]);
      } else if (friends[i][1] === user) {
        arr.push(friends[i][0]);
      }
    }

    return arr;
  };

  const calcScoreOfFriends = (user, friends, friendsOfUser) => {
    let obj = {};
    let name;
    let index;

    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < friendsOfUser.length; j++) {
        if (friends[i].includes(friendsOfUser[j])) {
          index = friends[i].indexOf(friendsOfUser[j]);

          if (index === 0) {
            name = friends[i][1];
          } else {
            name = friends[i][0];
          }

          if (name !== user) {
            if (obj[name]) {
              obj[name] += 10;
            } else {
              obj[name] = 10;
            }
          }
        }
      }
    }

    return obj;
  };

  const calcScoreOfVisitors = (visitors, friendsOfUser, scoreOfFriends) => {
    let name;

    for (let i = 0; i < visitors.length; i++) {
      if (!friendsOfUser.includes(visitors[i])) {
        name = visitors[i];
        if (scoreOfFriends[name]) {
          scoreOfFriends[name] += 1;
        } else {
          scoreOfFriends[name] = 1;
        }
      }
    }
  };

  return;
}

module.exports = problem7;
