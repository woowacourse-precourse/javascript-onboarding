function problem7(user, friends, visitors) {
  let [userFriends, newFriends] = getSeparateFrieds(user, friends);
  userFriends = new Set(userFriends);
  const withKnowScore = getWithKnowScore(userFriends, newFriends);
  const visitTimelineScore = getVisitTimelineScore(userFriends, visitors);
  const recommendScore = getRecommendScore(withKnowScore, visitTimelineScore);

  return recommendScore;
}

function getSeparateFrieds(user, friends) {
  const [userFriends, newFriends] = [[], []];
  friends.forEach((friend) => {
    const [friend1, friend2] = friend;
    if (friend1 === user) {
      userFriends.push(friend2);
    } else if (friend2 === user) {
      userFriends.push(friend1);
    } else {
      newFriends.push(friend);
    }
  });
  return [userFriends, newFriends];
}

function setWithKnowScore(withKnowScore, friend) {
  if (withKnowScore[friend]) {
    withKnowScore[friend] += 10;
  } else {
    withKnowScore[friend] = 10;
  }
  return withKnowScore;
}

function getWithKnowScore(userFriends, newFriends) {
  let withKnowScore = {};
  newFriends.forEach((friend) => {
    const [friend1, friend2] = friend;
    if (userFriends.has(friend1)) {
      withKnowScore = setWithKnowScore(withKnowScore, friend2);
    } else if (userFriends.has(friend2)) {
      withKnowScore = setWithKnowScore(withKnowScore, friend1);
    }
  });
  return withKnowScore;
}

function getVisitTimelineScore(userFriends, visitors) {
  const visitTimelineScore = {};
  for (let visitor of visitors) {
    if (userFriends.has(visitor)) {
      continue;
    }

    if (visitTimelineScore[visitor]) {
      visitTimelineScore[visitor]++;
    } else {
      visitTimelineScore[visitor] = 1;
    }
  }
  return visitTimelineScore;
}

function getRecommendScore(withKnowScore, visitTimelineScore) {
  for (let visitor in visitTimelineScore) {
    if (withKnowScore[visitor]) {
      withKnowScore[visitor] += visitTimelineScore[visitor];
    } else {
      withKnowScore[visitor] = visitTimelineScore[visitor];
    }
  }
  const recommendScore = sortRecommendScore(withKnowScore).slice(0, 5);
  return recommendScore.map((items) => {
    return items[0];
  });
}

function sortRecommendScore(recommendScore) {
  const sortedRecommendScore = Object.entries(recommendScore).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] > b[0] ? 1 : -1;
    }
    return b[1] - a[1];
  });
  return sortedRecommendScore;
}

module.exports = problem7;
