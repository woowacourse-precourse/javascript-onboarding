function checkUserLength(user) {
  if (user.length < 1 || user.length > 30) {
    return false;
  }

  return true;
}

function checkFriendsLength(friends) {
  if (friends.length < 1 || friends.length > 10000) {
    return false;
  }

  return true;
}

function checkIdLength(friends) {
  for (let i = 0; i < friends.length; i++) {
    if (
      friends[i][0].length < 1 ||
      friends[i][0].length > 30 ||
      friends[i][1].length < 1 ||
      friends[i][1].length > 30
    ) {
      return false;
    }
  }

  return true;
}

function checkVisitorsLength(visitors) {
  if (visitors.length < 0 || visitors.length > 10000) {
    return false;
  }

  return true;
}

function checkIdOnlyLowerCase(friends) {
  const regex = /^[a-z]+$/;

  for (let i = 0; i < friends.length; i++) {
    if (!regex.test(friends[i][0]) || !regex.test(friends[i][1])) {
      return false;
    }
  }

  return true;
}

function addFriendDecidedByAnotherSideIndex(friend, anotherSide, addToThisArr) {
  friend.indexOf(anotherSide) === 0
    ? addToThisArr.push(friend[1])
    : addToThisArr.push(friend[0]);
}

function getAlreadyFriends(user, friends, alreadyFriends) {
  for (let i = 0; i < friends.length; i++) {
    if (!friends[i].includes(user)) {
      continue;
    }

    addFriendDecidedByAnotherSideIndex(friends[i], user, alreadyFriends);
  }
}

function checkMyFriendsLinkedWithUnknown(
  friends,
  alreadyFriends,
  friendOfFreinds,
  i
) {
  for (let j = 0; j < alreadyFriends.length; j++) {
    if (!friends[i].includes(alreadyFriends[j])) {
      continue;
    }

    addFriendDecidedByAnotherSideIndex(
      friends[i],
      alreadyFriends[j],
      friendOfFreinds
    );
  }
}

function getFriendOfFreinds(user, friends, alreadyFriends, friendOfFreinds) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      continue;
    }

    checkMyFriendsLinkedWithUnknown(
      friends,
      alreadyFriends,
      friendOfFreinds,
      i
    );
  }
}

function scoringFriendOfFrineds(friendOfFreinds, score) {
  for (let i = 0; i < friendOfFreinds.length; i++) {
    if (score[friendOfFreinds[i]] === undefined) {
      score[friendOfFreinds[i]] = 10;

      continue;
    }

    score[friendOfFreinds[i]] += 10;
  }
}

function scoringVisitors(visitors, score) {
  for (let i = 0; i < visitors.length; i++) {
    if (score[visitors[i]] === undefined) {
      score[visitors[i]] = 1;

      continue;
    }

    score[visitors[i]] += 1;
  }
}

function getScore(friendOfFreinds, score, visitors) {
  scoringFriendOfFrineds(friendOfFreinds, score);

  scoringVisitors(visitors, score);
}

function makeScoreArray(sortedScore, score) {
  for (let name in score) {
    sortedScore.push([name, score[name]]);
  }
}

function sortByScoreAndThenName(sortedScore) {
  sortedScore.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }

    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
  });
}

function sortScore(score, sortedScore) {
  makeScoreArray(sortedScore, score);

  sortByScoreAndThenName(sortedScore);
}

function getFriendsRecommendArray(alreadyFriends, sortedScore, ans) {
  for (let i = 0; i < sortedScore.length; i++) {
    if (ans.length === 5) {
      break;
    }

    if (sortedScore[i][1] === 0) {
      continue;
    }

    if (alreadyFriends.includes(sortedScore[i][0])) {
      continue;
    }

    ans.push(sortedScore[i][0]);
  }

  return ans;
}

function problem7(user, friends, visitors) {
  if (
    !checkUserLength(user) ||
    !checkFriendsLength(friends) ||
    !checkIdLength(friends) ||
    !checkVisitorsLength(visitors) ||
    !checkIdOnlyLowerCase(friends)
  ) {
    return;
  }

  let alreadyFriends = [];

  getAlreadyFriends(user, friends, alreadyFriends);

  let friendOfFriends = [];

  getFriendOfFreinds(user, friends, alreadyFriends, friendOfFriends);

  let score = {};

  getScore(friendOfFriends, score, visitors);

  let sortedScore = [];

  sortScore(score, sortedScore);

  let ans = [];

  return getFriendsRecommendArray(alreadyFriends, sortedScore, ans);
}

module.exports = problem7;
