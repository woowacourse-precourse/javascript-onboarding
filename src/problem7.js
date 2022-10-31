function problem7(user, friends, visitors) {
  let realUserFriend = [];
  let newFriend = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] == user) {
      realUserFriend.push(friends[i][1]);
    } else if (friends[i][1] == user) {
      realUserFriend.push(friends[i][0]);
    }
  }

  for (let i = 0; i < realUserFriend.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j][0] == realUserFriend[i] && friends[j][1] != user) {
        newFriend.push(friends[j][1]);
      } else if (friends[j][1] == realUserFriend[i] && friends[j][0] != user) {
        newFriend.push(friends[j][0]);
      }
    }
  }

  let realNewFriend = [];
  for (let friend of newFriend) {
    if (!realUserFriend.includes(friend)) {
      realNewFriend.push(friend);
    }
  }

  let score = new Map();
  for (let x of realNewFriend) {
    if (score.has(x)) score.set(x, score.get(x) + 10);
    else score.set(x, 10);
  }

  for (let visitor of visitors) {
    if (!realUserFriend.includes(visitor)) {
      if (score.has(visitor)) score.set(visitor, score.get(visitor) + 1);
      else score.set(visitor, 1);
    }
  }

  const sortedScore = new Map([...score.entries()].sort(function (a, b) {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    }
    return b[1] - a[1];
  }));

  answer = [...sortedScore.keys()].slice(0, 5);
  return answer;
}

module.exports = problem7;