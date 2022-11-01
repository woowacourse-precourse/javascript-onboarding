function getFriendsRecommendArray(originFriends, sortedScore, ans) {
  for (let i = 0; i < sortedScore.length; i++) {
    if (ans.length === 5) {
      break;
    }

    if (sortedScore[i][1] === 0) {
      continue;
    }

    if (originFriends.includes(sortedScore[i][0])) {
      continue;
    }

    ans.push(sortedScore[i][0]);
  }

  return ans;
}
function sortScore(score) {
  let scoreArray = Object.entries(score);

  sortByScoreAndThenName(scoreArray);

  return scoreArray;
}
function sortByScoreAndThenName(scoreArray) {
  scoreArray.sort((a, b) => {
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

function getScore(friendOfFreinds, score, visitors) {
  scoringFriendOfFrineds(friendOfFreinds, score);

  scoringVisitors(visitors, score);
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

function getFriendOfFriends(user, friends, originFriends, friendOfFreinds) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      continue;
    }
    checkFriendsLinkedWithUnknown(friends, originFriends, friendOfFreinds, i);
  }
}

function checkFriendsLinkedWithUnknown(
  friends,
  originFriends,
  friendOfFreinds,
  i
) {
  for (let j = 0; j < originFriends.length; j++) {
    if (!friends[i].includes(originFriends[j])) {
      continue;
    }
    addFriendDecidedByotherSideIndex(
      friends[i],
      originFriends[j],
      friendOfFreinds
    );
  }
}

function getOriginFriends(user, friends, originFriends) {
  for (let i = 0; i < friends.length; i++) {
    if (!friends[i].includes(user)) {
      continue;
    }
    addFriendDecidedByotherSideIndex(friends[i], user, originFriends);
  }
}

function addFriendDecidedByotherSideIndex(friend, anotherSide, addToThisArr) {
  friend.indexOf(anotherSide) === 0
    ? addToThisArr.push(friend[1])
    : addToThisArr.push(friend[0]);
}

function problem7(user, friends, visitors) {
  let originFriends = [];
  let friendOfFriends = [];
  let score = {};
  let ans = [];

  getOriginFriends(user, friends, originFriends);
  getFriendOfFriends(user, friends, originFriends, friendOfFriends);
  getScore(friendOfFriends, score, visitors);

  const sortedScore = sortScore(score);

  return getFriendsRecommendArray(originFriends, sortedScore, ans);
}

function testCode() {
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  );
}
testCode();

module.exports = problem7;
