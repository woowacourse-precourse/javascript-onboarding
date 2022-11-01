function problem7(user, friends, visitors) {
  let getFriends = [];

  for (i in friends) {
    if (friends[i][0] == user) {
      getFriends.push(friends[i][1]);
    } else if (friends[i][1] == user) {
      getFriends.push(friends[i][0]);
    }
  }

  let visitedFriends = [];

  for (i in friends) {
    for (j in getFriends) {
      if (friends[i][0] == getFriends[j] || friends[i][1] == getFriends[j]) {
        visitedFriends.push(friends[i]);
      }
    }
  }
  let getScore = new Set(visitedFriends);
  visitedFriends = [...getScore]; //중복제거

  let score = {};

  for (i in visitedFriends) {
    key = visitedFriends[i][0];
    if (!score[key]) {
      score[key] = 10;
    }
    if (score[key]) {
      score[key] += 10;
    }
    key = visitedFriends[i][1];
    if (!score[key]) {
      score[key] = 10;
    }
    if (score[key]) {
      score[key] += 10;
    }
  }

  let FilteredScore = [];

  for (i in visitors) {
    FilteredScore.push(visitors[i]);
  }

  for (i in FilteredScore) {
    key = FilteredScore[i];
    if (!score[key]) {
      score[key] = 1;
    }
    if (score[key]) {
      score[key] += 1;
    }
  }
}

module.exports = problem7;
