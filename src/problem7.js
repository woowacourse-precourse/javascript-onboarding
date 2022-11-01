function problem7(user, friends, visitors) {
  const friend = [];
  const nearFriend = [];

  friends.forEach((f) =>
    f[1] === user ? friend.push(f[0]) : nearFriend.push(f[1])
  );

  const visitTimeline = visitors.filter((who) => !friend.includes(who));

  let score = {};

  nearFriend.forEach((who) => (score[who] = (score[who] ?? 0) + 10));
  visitTimeline.forEach((who) => (score[who] = (score[who] ?? 0) + 1));

  score = Object.entries(score)
    .slice(0, 5)
    .sort(function (a, b) {
      if (a[1] !== b[1]) return b[1] - a[1];
      return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
    });

  return score.map((name) => name[0]);
}

module.exports = problem7;
