const {
  getUserFriend,
  getScoreTogetherFriend,
  getVisitorDeleteFriend,
  getScoreVisitor,
} = require("./problem7.util");

function problem7(user, friends, visitors) {
  const getFriend = (user) => getUserFriend(user, friends);
  const userFriends = getFriend(user).flat();
  const weKnowFriend = userFriends.map(getFriend).flat();
  const score = getScoreTogetherFriend(userFriends, weKnowFriend);
  const newVisitors = getVisitorDeleteFriend(visitors, userFriends);
  const newScore = getScoreVisitor(newVisitors, score);
  return Object.entries(newScore)
    .sort(([k, v], [_k, _v]) => {
      if (v !== _v) return _v - v;
      return _k - k;
    })
    .map(([k, v]) => k);
}

module.exports = problem7;
