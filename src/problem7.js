function problem7(user, friends, visitors) {
  var answer;
  let userFriends = [];
  let getTen = [];
  let getOne = [];
  const map = new Map();
  let res;
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (friends[i][j] === user) {
        if (friends[i][0] === user) {
          userFriends.push(friends[i][1]);
        } else {
          userFriends.push(friends[i][0]);
        }
      }
    }
  }
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (friends[i][j] === userFriends[j]) {
        if (friends[i][0] === userFriends[j]) {
          getTen.push(friends[i][1]);
        } else {
          getTen.push(friends[i][0]);
        }
      }
    }
  }
  getTen.splice(getTen.indexOf(user), 1);
  for (let i = 0; i < visitors.length; i++) {
    getOne.push(visitors[i]);
    for (let j = 0; j < userFriends.length; j++) {
      if (getOne.indexOf(userFriends[j]) !== -1) {
        getOne.splice(getOne.indexOf(userFriends[j]), 1);
      }
    }
  }
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (getTen.indexOf(friends[i][j]) !== -1) {
        map.set(friends[i][j], 10);
      }
    }
  }
  for (let i = 0; i < visitors.length; i++) {
    let count = 0;
    if (getOne.indexOf(visitors[i]) !== -1) {
      for (let j = 0; j < visitors.length; j++) {
        if (visitors[j] === visitors[i]) {
          count++;
        }
      }
      map.set(visitors[i], count);
    }
  }
  res = new Map(
    [...map].sort((a, b) => {
      b[1] - a[1];
    })
  );
  answer = Array.from(res.keys());
  return answer;
}

module.exports = problem7;
