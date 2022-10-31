function problem7(user, friends, visitors) {
  var answer;
  const scoreObj = {};
  const scoreArr = [];
  const duplicateFriend = friends.reduce((acc, cur) => acc.concat(cur));

  const allUser = duplicateFriend.filter(
    (friend, index) => duplicateFriend.indexOf(friend) === index
  );

  const myFriends = [];
  friends.forEach((friend) => {
    if (friend.includes(user)) {
      const userIndex = friend.indexOf(user);
      if (userIndex === 0) {
        myFriends.push(friend[1]);
      } else {
        myFriends.push(friend[0]);
      }
    }
  });

  const followFriends = allUser.filter(
    (friend) => !myFriends.includes(friend) && friend !== user
  );

  followFriends.forEach((friend) => (scoreObj[friend] = 10));
  // followFriends.forEach((friend) => score.push([friend, 10]));

  const visitFriends = visitors.filter((friend) => !allUser.includes(friend));

  for (const friend of visitFriends) {
    scoreObj[friend] = scoreObj[friend] ? scoreObj[friend] + 1 : 1;
  }

  for (const friend in scoreObj) {
    scoreArr.push([friend, scoreObj[friend]]);
  }

  scoreArr.sort(function (a, b) {
    return b[1] - a[1];
  });

  const result = [];
  scoreArr.forEach((el) => result.push(el[0]));

  answer = result;

  return answer;
}

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
);
module.exports = problem7;
