function problem7(user, friends, visitors) {
  var answer;

  // 각자 사람들의 친구 구하기
  const getFirends = (friends) => {
    const result = {};
    friends.forEach((value) => {
      const [user1, user2] = value;
      if (!(user1 in result)) {
        result[user1] = [user2];
      } else {
        result[user1].push(user2);
      }

      if (!(user2 in result)) {
        result[user2] = [user1];
      } else {
        result[user2].push(user1);
      }
    });
    return result;
  };

  const friendsDict = getFirends(friends);
  console.log(friendsDict);

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
  ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
);
module.exports = problem7;
