function duduChecker(user, friends, dude) {
  friends.forEach((arr) => {
    const [A, B] = arr;
    if (A === user) {
      dude.push(B);
    } else if (B === user) {
      dude.push(A);
    }
  });
}

function canFriendScore(friend, user, target, another) {
  return target === friend && another !== user;
}

function friendScore(dude, friends, score, user) {
  dude.forEach((friend) => {
    friends.forEach((arr) => {
      const [A, B] = arr;
      if (canFriendScore(friend, user, A, B)) {
        if (!score[B]) {
          score[B] = 10;
        } else {
          score[B] += 10;
        }
      } else if (canFriendScore(friend, user, B, A)) {
        if (!score[A]) {
          score[A] = 10;
        } else {
          score[A] += 10;
        }
      }
    });
  });
}

function visitedScore(visitors, dude, score) {
  visitors.forEach((name) => {
    if (!dude.includes(name)) {
      if (!score[name]) {
        score[name] = 1;
      } else {
        score[name] += 1;
      }
    }
  });
}

function scoreSort(result) {
  result.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    } else {
      return b[1] - a[1];
    }
  });
}

function cutFiveFriend(result) {
  return result.slice(0, 5);
}

function getFriendName(result) {
  return result.map((arr) => {
    const [id, _] = arr;
    return id;
  });
}

function problem7(user, friends, visitors) {
  const dude = [];
  const score = {};

  duduChecker(user, friends, dude);

  friendScore(dude, friends, score, user);

  visitedScore(visitors, dude, score);

  let result = Object.entries(score);

  scoreSort(result);

  if (result.length > 5) {
    result = cutFiveFriend(result);
  }

  result = getFriendName(result);

  return result;
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
