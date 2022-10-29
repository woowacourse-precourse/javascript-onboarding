function problem7(user, friends, visitors) {
  const dude = [];
  const score = {};

  friends.forEach((arr, idx) => {
    const [A, B] = arr;
    if (A === user) {
      dude.push(B);
    } else if (B === user) {
      dude.push(A);
    }
  });

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

  visitors.forEach((name) => {
    if (!dude.includes(name)) {
      if (!score[name]) {
        score[name] = 1;
      } else {
        score[name] += 1;
      }
    }
  });

  let result = Object.entries(score);

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
