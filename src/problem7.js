function problem7(user, friends, visitors) {
  let [userFriends, newFriends] = getSeparateFrieds(user, friends);
  userFriends = new Set(userFriends);
  const withKnowScore = getWithKnowScore(userFriends, newFriends);
  const visitTimelineScore = getVisitTimelineScore(userFriends, visitors);
  const recommendScore = getRecommendScore(withKnowScore, visitTimelineScore);

  return answer;
}

function getSeparateFrieds(user, friends) {
  const separateFriends = [[], []];
  friends.forEach((friend) => {
    const [friend1, friend2] = friend;
    if (friend1 === user) {
      separateFriends[0].push(friend2);
    } else if (friend2 === user) {
      separateFriends[0].push(friend1);
    } else {
      separateFriends[1].push(friend);
    }
  });
  return separateFriends;
}

function setWithKnowScore(withKnowScore, friend) {
  if (withKnowScore[friend]) {
    withKnowScore[friend] += 10;
  } else {
    withKnowScore[friend] = 10;
  }
  return withKnowScore;
}

function getWithKnowScore(userFriends, friends) {
  let withKnowScore = {};
  friends.forEach((friend) => {
    const [friend1, friend2] = friend;
    if (userFriends.has(friend1)) {
      withKnowScore = setWithKnowScore(withKnowScore, friend2);
    } else if (userFriends.has(friend2)) {
      withKnowScore = setWithKnowScore(withKnowScore, friend1);
    }
  });
  return withKnowScore;
}

function getVisitTimelineScore(visitors) {
  const visitTimelineScore = {};
  visitors.forEach((visitor) => {
    if (visitTimelineScore[visitor]) {
      visitTimelineScore[visitor]++;
    } else {
      visitTimelineScore[visitor] = 1;
    }
  });
  return visitTimelineScore;
}

function getRecommendScore(withKnowScore, visitTimelineScore) {
  for (visitor in visitTimelineScore) {
    if (withKnowScore[visitor]) {
      withKnowScore[visitor] += visitTimelineScore[visitor];
    } else {
      withKnowScore[visitor] = visitTimelineScore[visitor];
    }
    return withKnowScore;
  }
}
module.exports = problem7;
