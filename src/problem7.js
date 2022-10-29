function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function getMyFriend(user, friends) {
  const foundFriends = [];
  friends.forEach((friend) => {
    if (friend.includes(user)) {
      const friendName = friend.filter((friend) => friend !== user);
      foundFriends.push(...friendName);
    }
  });

  return foundFriends;
}

function getRecomendFriendList(user, myFriends, friends) {
  const recomendFriends = [];
  myFriends.forEach((myFriend) => {
    for (let friend of friends) {
      if (friend.includes(myFriend) && friend.includes(user) === false) {
        const recomendFriendName = friend.filter(
          (friend) => friend !== myFriend
        );
        recomendFriends.push(...recomendFriendName);
      }
    }
  });

  return recomendFriends;
}

function getStrangeVisitorList(myFriends, visitors) {
  let totalStrangeVisitorsList = visitors;
  for (let name of myFriends) {
    totalStrangeVisitorsList = totalStrangeVisitorsList.filter(
      (visitor) => visitor !== name
    );
  }

  return totalStrangeVisitorsList;
}

function scoreConversion(recomendFriends, plusScore) {
  const score = recomendFriends.reduce((total, current) => {
    if (!total[current]) {
      total[current] = plusScore;
    } else if (current in total) {
      total[current] += plusScore;
    }
    return score;
  }, {});

  return score;
}

function sumScore(friends, visitors) {
  for (const [key, value] of Object.entries(visitors)) {
    if (!friends[key]) {
      friends[key] = value;
    } else if (key in friends) {
      friends[key] += value;
    }
  }
}

module.exports = problem7;
