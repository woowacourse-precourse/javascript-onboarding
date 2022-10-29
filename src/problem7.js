function problem7(user, friends, visitors) {
  var answer;

  const friendList = {};
  const recommendScore = {};

  for (const [a, b] of friends) {
    if (friendList[a]) friendList[a].push(b);
    else friendList[a] = [b];
    if (friendList[b]) friendList[b].push(a);
    else friendList[b] = [a];
  }

  for (const [target, list] of Object.entries(friendList)) {
    if (target === user) continue;
    const userFriendList = friendList[user];
    const friendIntersection = userFriendList.filter((friend) =>
      list.includes(friend),
    );
    const knowTogether = friendIntersection.length;
    if (recommendScore[target]) {
      recommendScore[target] += knowTogether * 10;
    } else {
      recommendScore[target] = knowTogether * 10;
    }
  }

  for (const visitor of visitors) {
    if (recommendScore[visitor]) {
      recommendScore[visitor] += 1;
    } else {
      recommendScore[visitor] = 1;
    }
  }

  return answer;
}

problem7(
  'mrko',
  [
    ['donut', 'andole'],
    ['donut', 'jun'],
    ['donut', 'mrko'],
    ['shakevan', 'andole'],
    ['shakevan', 'jun'],
    ['shakevan', 'mrko'],
  ],
  ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
);

module.exports = problem7;
