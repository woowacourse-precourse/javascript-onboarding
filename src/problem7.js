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

const sortFriends = (scoreOfFriends) => {
  let arr = Object.entries(scoreOfFriends).sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      else if (b[0] > a[0]) return -1;
      else return 0;
    } else {
      return b[1] - a[1];
    }
  });

  arr = arr.map(el => el[0])

  return arr;
};

function problem7(user, friends, visitors) {
  let answer;

  return;
}

module.exports = problem7;
