function friendOfFriend(user, friends, set) {
  friends = friends.filter((item) => {
    const userFriend = item.filter((v) => v !== user);
    if (userFriend.length === 1) {
      set.add(userFriend[0]);
    } else return item;
  });
  return { friends, set };
}
function problem7(user, friends, visitors) {
  var answer = [];
  var obj = {};
  var set = new Set();
  var firstData = friendOfFriend(user, friends, set);
  set = firstData.set;
  friends = firstData.friends;
  return answer;
}

module.exports = problem7;
