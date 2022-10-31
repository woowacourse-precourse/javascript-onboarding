const makeFriendList = (friends, friendList) => {
  for (let i = 0; i < friends.length; i++) {
    const friendA = friends[i][0], friendB = friends[i][1];

    if (!friendList.hasOwnProperty(friendA))
      friendList[friendA] = new Set();
    if (!friendList.hasOwnProperty(friendB))
      friendList[friendB] = new Set();

    friendList[friendA].add(friendB);
    friendList[friendB].add(friendA);
  }
}

const giveVisitPoint = (visitors, score) => {
  for (let i = 0; i < visitors.length; i++) {
    const currentVisitor = visitors[i];

    if (!score.hasOwnProperty(currentVisitor))
      score[currentVisitor] = 0;
    score[currentVisitor]++;
  }
}

const giveFriendPoint = (user, friendList, score) => {
  for (currentFriend in friendList) {
    let friendData = friendList[currentFriend];
    if (!friendData.has(user))
      continue;

    friendData = Array.from(friendData);
    for (let i = 0; i < friendData.length; i++) {
      if (!score.hasOwnProperty(friendData[i]))
        score[friendData[i]] = 0;
      score[friendData[i]] += 10;
    }
    score[currentFriend] = -Infinity;
  }
  score[user] = -Infinity;
}

const getTopFive = score => {
  let topFiveList = [];
  score = Object.entries(score);

  score.sort((a, b) => {
    if (a[1] > b[1])
      return -1;
    else if (a[1] < b[1])
      return 1;

    if (a[0] < b[0])
      return -1;
    else
      return 1;
  });

  const answerLength = Math.min(5, score.length);
  for (let i = 0; i < answerLength; i++) {
    if (score[i][1] <= 0)
      break;
    topFiveList.push(score[i][0]);
  }

  return topFiveList;
}

const problem7 = (user, friends, visitors) => {
  let friendList = {};
  let score = {};

  makeFriendList(friends, friendList);
  giveVisitPoint(visitors, score);
  giveFriendPoint(user, friendList, score);

  const answer = getTopFive(score);
  return answer;
}

module.exports = problem7;
