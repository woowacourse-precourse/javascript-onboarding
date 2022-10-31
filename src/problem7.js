// 함께 아는 친구를 기준으로 추천 점수를 구하는 기능
const scoreFromMutual = (user, friendsArr) => {
  let friendsWithUser = friendsArr.filter((friends) => {
    return friends[0] == user || friends[1] == user;
  });
  if (friendsWithUser.length != 0) {
    friendsWithUser = friendsWithUser.reduce((prev, curr) => prev.concat(curr));
    friendsWithUser = friendsWithUser.filter((friends) => {
      return friends != user;
    });
  }

  let friendsNotWithUser = friendsArr.filter((friends) => {
    return friends[0] != user && friends[1] != user;
  });

  let mutualObj = {};
  if (friendsWithUser.length != 0) {
    for (i = 0; i < friendsWithUser.length; i++) {
      for (j = 0; j < friendsNotWithUser.length; j++) {
        if (friendsWithUser[i] == friendsNotWithUser[j][0]) {
          if (Object.keys(mutualObj).includes(friendsNotWithUser[j][1])) {
            mutualObj[friendsNotWithUser[j][1]] += 10;
          } else {
            mutualObj[friendsNotWithUser[j][1]] = 10;
          }
        } else if (friendsWithUser[i] == friendsNotWithUser[j][1]) {
          if (Object.keys(mutualObj).includes(friendsNotWithUser[j][0])) {
            mutualObj[friendsNotWithUser[j][0]] += 10;
          } else {
            mutualObj[friendsNotWithUser[j][0]] = 10;
          }
        }
      }
    }
  } else {
    mutualObj = {};
  }
  return [friendsWithUser, mutualObj];
};

// 사용자의 타임라인에 방문한 횟수 기준으로 추천 점수를 구하는 기능
const scoreFromVisit = (visitors) => {
  let visitorsObj = {};
  for (i = 0; i < visitors.length; i++) {
    if (Object.keys(visitorsObj).includes(visitors[i])) {
      visitorsObj[visitors[i]] += 1;
    } else {
      visitorsObj[visitors[i]] = 1;
    }
  }
  return visitorsObj;
};

function problem7(user, friends, visitors) {
  var answer;

  let candidateFriends = {};
  let userFriends;
  let scoreFromMutualObj = scoreFromMutual(user, friends)[1];
  let scoreFromVisitObj = scoreFromVisit(visitors);

  if (Object.keys(scoreFromVisitObj).length == 0) {
    if (Object.keys(scoreFromMutualObj).length == 0) {
      candidateFriends = {};
    } else {
      candidateFriends = scoreFromMutualObj;
    }
  } else {
    if (Object.keys(scoreFromMutualObj).length == 0) {
      candidateFriends = scoreFromVisitObj;
    } else {
      for (i = 0; i < Object.keys(scoreFromVisitObj).length; i++) {
        for (j = 0; j < Object.keys(scoreFromMutualObj).length; j++) {
          if (
            Object.keys(scoreFromVisitObj)[i] ==
            Object.keys(scoreFromMutualObj)[j]
          ) {
            candidateFriends[Object.keys(scoreFromVisitObj)[i]] =
              Object.values(scoreFromVisitObj)[i] +
              Object.values(scoreFromMutualObj)[j];
          } else {
            candidateFriends[Object.keys(scoreFromVisitObj)[i]] =
              Object.values(scoreFromVisitObj)[i];
            candidateFriends[Object.keys(scoreFromMutualObj)[j]] =
              Object.values(scoreFromMutualObj)[j];
          }
        }
      }
    }
  }

  userFriends = scoreFromMutual(user, friends)[0];

  let keyOfCandidateFriends = Object.keys(candidateFriends);

  for (i = 0; i < keyOfCandidateFriends.length; i++) {
    for (j = 0; j < userFriends.length; j++)
      if (keyOfCandidateFriends[i] == userFriends[j]) {
        delete candidateFriends[keyOfCandidateFriends[i]];
      }
  }

  let sortedCandidateFriends = [];
  for (let name in candidateFriends) {
    sortedCandidateFriends.push([name, candidateFriends[name]]);
  }

  sortedCandidateFriends = sortedCandidateFriends.sort((a, b) => {
    return b[1] - a[1];
  });

  sortedCandidateFriends = sortedCandidateFriends.sort((a, b) => {
    if (a[1] == b[1]) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
  });

  sortedCandidateFriends = sortedCandidateFriends.map((friends) => {
    if (friends[1] != 0) {
      return friends[0];
    }
  });

  answer = sortedCandidateFriends.slice(0, 5);
  return answer;
}

module.exports = problem7;

problem7(
  "hello",
  [
    ["andole", "jun"],
    ["andole", "bedi"],
    ["jun", "shakevan"],
    ["jun", "kane"],
    ["jun", "sam"],
    ["bedi", "shakevan"],
    ["bedi", "anne"],
    ["bedi", "sam"],
    ["anne", "mrko"],
  ],
  ["donut", "anne", "mrko", "mrko", "sam"]
);
