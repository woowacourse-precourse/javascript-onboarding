function problem7(user, friends, visitors) {
  const frinedsArrDict = {};
  const scoreDict = {};
  friends.forEach((arr) => {
    const fr1 = arr[0];
    const fr2 = arr[1];
    scoreDict[fr1] = 0;
    scoreDict[fr2] = 0;
    if (!frinedsArrDict[fr1]) {
      frinedsArrDict[fr1] = [fr2];
    } else {
      frinedsArrDict[fr1].push(fr2);
    }
    if (!frinedsArrDict[fr2]) {
      frinedsArrDict[fr2] = [fr1];
    } else {
      frinedsArrDict[fr2].push(fr1);
    }
  });
  if (frinedsArrDict[user]) {
    frinedsArrDict[user].forEach((friend) => {
      frinedsArrDict[friend].forEach((fr) => {
        scoreDict[fr] += 10;
      });
    });
  }
  visitors.forEach((visitor) => {
    if (!scoreDict[visitor]) scoreDict[visitor] = 1;
    else {
      scoreDict[visitor] += 1;
    }
  });
  let answer = Object.keys(scoreDict)
    .filter((name) => {
      if (frinedsArrDict[user].includes(name) || name === user) return false;
      return true;
    })
    .map((name) => {
      return { name, score: scoreDict[name] };
    });
  answer = answer.sort(function (a, b) {
    let xScore = a.score;
    let yScore = b.score;
    if (xScore < yScore) {
      return 1;
    }
    if (xScore > yScore) {
      return -1;
    } else {
      return b.name - a.name;
    }
  });
  return answer.map((obj) => obj.name);
}

module.exports = problem7;
