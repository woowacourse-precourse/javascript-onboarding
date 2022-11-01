function problem7(user, friends, visitors) {
  const friendsList = [];
  const points = {};

  checkUserFriends(user, friends, friendsList);
  setDefaultPoints(user, friends, friendsList, points);
  addTenPoints(friends, friendsList, points);
  addOnePoint(friendsList, points, visitors);

  return sortByValue(points);
}

function checkUserFriends(user, friends, friendsList) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      friendsList.push(...friends[i].filter((friend) => friend !== user));
    }
  }
}

function setDefaultPoints(user, friends, friendsList, points) {
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (!friendsList.includes(friends[i][j]) && friends[i][j] !== user) {
        points[friends[i][j]] = 0;
      }
    }
  }
}

function addTenPoints(friends, friendsList, points) {
  for (let i = 0; i < friends.length; i++) {
    let keysOfPoints = Object.keys(points);
    for (let j = 0; j < keysOfPoints.length; j++) {
      if (
        friends[i].includes(keysOfPoints[j]) &&
        friendsList.includes(
          friends[i][1 - friends[i].indexOf(keysOfPoints[j])]
        )
      ) {
        points[keysOfPoints[j]] += 10;
      }
    }
  }
}

function addOnePoint(friendsList, points, visitors) {
  for (let i = 0; i < visitors.length; i++) {
    if (Object.keys(points).includes(visitors[i])) {
      points[visitors[i]] += 1;
    } else if (!friendsList.includes(visitors[i])) {
      points[visitors[i]] = 1;
    }
  }
}

function sortByValue(points) {
  const answer = [];
  const pointsArr = [];

  for (let name in points) {
    pointsArr.push([name, points[name]]);
  }

  pointsArr.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] > b[0]) return 1;
    return -1;
  });

  for (let i = 0; i < pointsArr.length; i++) {
    if (pointsArr[i][1] !== 0) answer.push(pointsArr[i][0]);
  }

  if (answer.length > 5) answer = answer.slice(0, 5);

  return answer;
}

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

module.exports = problem7;
