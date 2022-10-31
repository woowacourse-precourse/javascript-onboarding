function problem7(user, friends, visitors) {
  const scoreList = {};
  const friendsList = {};

  for (let [A, B] of friends) {
    friendsList[A] = friendsList[A] ? [...friendsList[A], B] : [B];
    friendsList[B] = friendsList[B] ? [...friendsList[B], A] : [A];
  }

  for (let id of visitors) {
    scoreList[id] = ++scoreList[id] || 1;
  }

  // 이미 친구
  for (let friend of friendsList[user]) {
    friendsList[friend].forEach((id) => {
      scoreList[id] = scoreList[id] + 10 || 10;
    });
    delete scoreList[friend];
  }

  delete scoreList[user];

  const sortedList = Object.entries(scoreList).sort((a, b) => {
    if (a[1] === b[1]) return -1;
    else return b[1] - a[1];
  });

  const answer = [...sortedList].map(([name, score]) => {
    if (score > 0) return name;
  });

  return answer;
}
module.exports = problem7;
