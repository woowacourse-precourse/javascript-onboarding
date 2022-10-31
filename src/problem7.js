function problem7(user, friends, visitors) {
  const answer = [];
  const friendsMap = new Map();
  for (let i = 0; i < friends.length; i++) {
    const one = friendsMap.get(friends[i][0]) || [];
    const two = friendsMap.get(friends[i][1]) || [];
    if (!one.includes(friends[i][1])) {
      friendsMap.set(friends[i][0], [...one, friends[i][1]]);
    }
    if (!two.includes(friends[i][0])) {
      friendsMap.set(friends[i][1], [...two, friends[i][0]]);
    }
  }

  const userFriends = friendsMap.get(user);
  const keys = Array.from(friendsMap.keys());
  const scoreObj = {};
  const countFriends = (key) => {
    if (key === user) return 0;
    let score = 0;
    const keyFriends = friendsMap.get(key);
    for (const friend of userFriends) {
      if (keyFriends.includes(friend)) score += 10;
    }
    scoreObj[key] = score;
  };

  for (const key of keys) {
    countFriends(key);
  }

  for (const visitor of visitors) {
    let score = scoreObj[visitor] || 0;
    scoreObj[visitor] = score + 1;
  }
  const scoreArray = Object.entries(scoreObj).sort((a, b) => {
    if (b[1] > a[1]) return 1;
    else if (b[1] < a[1]) return -1;
    else {
      if (a[0] < b[0]) return -1;
      else if (a[0] > b[0]) return 1;
      else return 0;
    }
  });

  scoreArray.forEach((friendScore) => {
    if (
      friendScore[1] !== 0 &&
      !userFriends.includes(friendScore[0]) &&
      answer.length < 5
    )
      answer.push(friendScore[0]);
  });
  return answer;
}

const testcase = [
  [
    'mrko',
    [
      ['donut', 'jun'],
      ['donut', 'andole'],
      ['donut', 'mrko'],
      ['shakevan', 'andole'],
      ['shakevan', 'jun'],
      ['shakevan', 'mrko'],
    ],
    ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
  ],
];

for (let i = 0; i < testcase.length; i++) {
  console.log(
    `${i + 1} ${problem7(testcase[i][0], testcase[i][1], testcase[i][2])}`
  );
}
module.exports = problem7;
