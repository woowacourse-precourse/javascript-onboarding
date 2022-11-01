function problem7(user, friends, visitors) {
  const result = [];
  const friendYouMightKnow = [];
  const friendsList = friends.filter((list) => {
    if (list.includes(user)) {
      return list;
    }
  });
  const bestFriends = friendsList.map((list) => {
    const userIndex = list.indexOf(user);
    list.splice(userIndex, 1);
    return list.toString();
  });
  for (let i = 0; i < bestFriends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j].includes(bestFriends[i]) && friends[j].length === 2) {
        const userIndex = friends[j].indexOf(bestFriends[i]);
        friends[j].splice(userIndex, 1);
        friendYouMightKnow.push(friends[j].toString());
      }
    }
  }
  const friendsScore = friendYouMightKnow.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 10;
    return acc;
  }, {});
  const visitorsScore = visitors.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const finalScore = Object.assign(friendsScore, visitorsScore);
  let finalScoreSorted = [];
  for (let idx in finalScore) {
    finalScoreSorted.push([idx, finalScore[idx]]);
  }
  finalScoreSorted.sort((a, b) => b[1] - a[1]);
  finalScoreSorted.forEach((list) => {
    if (result.length <= 5) {
      result.push(list[0]);
    }
  });
  for (let i = 0; i < bestFriends.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] === bestFriends[i]) {
        const userIndex = result.indexOf(result[j]);
        result.splice(userIndex, 1);
      }
    }
  }
  return result;
}

module.exports = problem7;
