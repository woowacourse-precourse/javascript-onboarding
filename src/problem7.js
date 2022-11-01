const makeFriendsDictionary = (friends) => {
  const dictionary = {};
  for (const [friend1, friend2] of friends) {
    dictionary[friend1] === undefined
      ? (dictionary[friend1] = [friend2])
      : dictionary[friend1].push(friend2);
    dictionary[friend2] === undefined
      ? (dictionary[friend2] = [friend1])
      : dictionary[friend2].push(friend1);
  }
  return dictionary;
};

const pointToKnownFriendWithUser = (dictionary, userFriends) => {
  const score = {};
  for (const key in dictionary) {
    dictionary[key].filter((friend) => {
      if (userFriends.includes(friend)) {
        score[key] === undefined ? (score[key] = 10) : (score[key] += 10);
      }
    });
  }
  return score;
};

const pointToVisitiedUser = (dictionary, visitors) => {
  for (const visit of visitors) {
    dictionary[visit] === undefined
      ? (dictionary[visit] = 1)
      : (dictionary[visit] += 1);
  }
  return dictionary;
};

const sortRecommend = (dictionary, user) => {
  const sortable = [];
  for (const key in dictionary) {
    if (key !== user && dictionary[key] > 0) {
      sortable.push([key, dictionary[key]]);
    }
  }
  const sortedRecommend = sortable.sort((a, b) => {
    return b[1] - a[1];
    return b[0] - a[0];
  });
  return sortedRecommend;
};

function problem7(user, friends, visitors) {
  const friend = makeFriendsDictionary(friends);
  const arleadyFirend = friend[user];
  const friendPoint = pointToKnownFriendWithUser(friend, arleadyFirend);
  const finalScore = pointToVisitiedUser(friendPoint, visitors);
  let answer = [];

  sortRecommend(finalScore, user).map(([name, score]) => {
    if (!arleadyFirend.includes(name)) {
      answer.push(name);
    }
  });
  return answer;
}

module.exports = problem7;
