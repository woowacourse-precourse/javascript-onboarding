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

function friendScore(dude, friends, score, user) {
  dude.forEach((friend) => {
    friends.forEach((arr) => {
      const [A, B] = arr;
      if (A === friend) {
        if (!score[B] && B !== user) {
          score[B] = 10;
        } else if (B !== user) {
          score[B] += 10;
        }
      } else if (B === friend) {
        if (!score[A] && A !== user) {
          score[A] = 10;
        } else if (A !== user) {
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

function problem7(user, friends, visitors) {
  const dude = [];
  const score = {};

  duduChecker(user, friends, dude);

  friendScore(dude, friends, score, user);

  visitedScore(visitors, dude, score);

  let result = Object.entries(score);

  result.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    } else {
      return b[1] - a[1];
    }
  });

  if (result.length > 5) {
    result = result.slice(0, 5);
  }

  result = result.map((arr) => {
    const [id, _] = arr;
    return id;
  });

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
