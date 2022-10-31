function problem7(user, friends, visitors) {
  let answer = [];
  const FRIEND_OF_FRIEND_SCORE = 10;
  const STRANGER_SCORE = 1;
  const myFriends = getMyFriend(user, friends);
  const exceptionAcquaintance = getExceptionAcquaintance(myFriends, friends);
  const recomendFriendsList = getRecomendFriendList(
    user,
    myFriends,
    exceptionAcquaintance
  );
  const strangeVisitorList = getStrangeVisitorList(myFriends, visitors);
  const recomendFriendsScore = scoreConversion(
    recomendFriendsList,
    FRIEND_OF_FRIEND_SCORE
  );
  const strangeVisitorScore = scoreConversion(
    strangeVisitorList,
    STRANGER_SCORE
  );
  const recomendFriends = Object.keys(
    sorting(sumScore(recomendFriendsScore, strangeVisitorScore))
  );

  for (let i = 0; i < 5; i++) {
    if (i >= recomendFriends.length) {
      break;
    }
    answer.push(recomendFriends[i]);
  }

  return answer;
}

function getMyFriend(user, friends) {
  const foundFriends = [];
  friends.forEach(friend => {
    if (friend.includes(user)) {
      const friendName = friend.filter(friend => friend !== user);
      foundFriends.push(...friendName);
    }
  });

  return foundFriends;
}

function getRecomendFriendList(user, myFriends, friends) {
  const recomendFriends = [];
  myFriends.forEach(myFriend => {
    for (let friend of friends) {
      if (friend.includes(myFriend) && friend.includes(user) === false) {
        const recomendFriendName = friend.filter(friend => friend !== myFriend);
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
      visitor => visitor !== name
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
    return total;
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

  return friends;
}

function sorting(recomendFriends) {
  const sort = Object.fromEntries(
    Object.entries(recomendFriends).sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      } else if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      }
    })
  );

  return sort;
}

function getExceptionAcquaintance(myFriends, friends) {
  const exceptionFriends = friends.filter(friends => {
    let count = 0;
    for (let friend of friends) {
      if (myFriends.indexOf(friend) > -1) {
        count += 1;
      }
    }

    return count === 2 ? false : true;
  });

  return exceptionFriends;
}
module.exports = problem7;
