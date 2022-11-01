function problem7(user, friends, visitors) {
  let recommendation = [];

  const { friendsYouDoNotKnow, visitorsYoDoNotKnow } = setThreeGroups(
    user,
    friends,
    visitors
  );

  const obj1 = getNamesWithScores(friendsYouDoNotKnow.flat(), 10);
  const obj2 = getNamesWithScores(visitorsYoDoNotKnow, 1);

  recommendation = sortByScoreAndName(obj1, obj2);

  return recommendation;
}

function getFriendsYouAlreadyKnow(user, friends) {
  const friendsYouAlreadyKnow = [];

  friends.forEach((pair) => {
    if (pair.includes(user)) {
      friendsYouAlreadyKnow.push(...pair);
      for (let i = 0; i < friendsYouAlreadyKnow.length; i++) {
        if (friendsYouAlreadyKnow[i] === user) {
          friendsYouAlreadyKnow.splice(i, 1);
          i--;
        }
      }
    }
  });

  return friendsYouAlreadyKnow;
}
function setThreeGroups(user, friends, visitors) {
  const currentFriends = getFriendsYouAlreadyKnow(user, friends);
  const friendsYouDoNotKnow = friends.map((friend) =>
    friend.filter((e) => !currentFriends.includes(e)).filter((e) => e !== user)
  );
  const visitorsYoDoNotKnow = visitors.filter(
    (e) => !currentFriends.includes(e)
  );

  return { friendsYouDoNotKnow, visitorsYoDoNotKnow };
}
function getNamesWithScores(names, score) {
  const obj = {};

  names.forEach((name) => {
    if (obj[name]) {
      obj[name] += 1 * score;
    } else {
      obj[name] = 1 * score;
    }
  });

  return obj;
}
function sortByScoreAndName(obj1, obj2) {
  const arr = [];
  const recommendation = [];

  objToArr(obj1, arr);
  objToArr(obj2, arr);

  for (let i = 0; i < arr.length; i++) {
    recommendation.push(arr[i][0]);
  }

  return recommendation.slice(0, 5);
}

function objToArr(obj, arr) {
  for (const [key, value] of Object.entries(obj)) {
    arr.push([key, value]);
    arr.sort(sortFn);
  }
}
function sortFn(a, b) {
  if (a[1] > b[1]) {
    return -1;
  }
  if (a[1] === b[1]) if (a[0] < b[0]) return -1;
  return 1;
}

module.exports = problem7;

console.log(
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
  )
);
