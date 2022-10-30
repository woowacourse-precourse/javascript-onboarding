function friendOfFriend(user, friends, set) {
  friends = friends.filter((item) => {
    const userFriend = item.filter((v) => v !== user);
    if (userFriend.length === 1) {
      set.add(userFriend[0]);
    } else return item;
  });
  return { friends, set };
}

function friendAddTen(friends, set, obj) {
  friends.forEach((item) => {
    const [A, B] = item;
    if (set.has(A)) {
      if (!obj[B]) obj[B] = 10;
      else obj[B] += 10;
    }
    if (set.has(B)) {
      if (!obj[A]) obj[A] = 10;
      else obj[A] += 10;
    }
  });
  return obj;
}
function problem7(user, friends, visitors) {
  var answer = [];
  var obj = {};
  var set = new Set();
  var firstData = friendOfFriend(user, friends, set);
  set = firstData.set;
  friends = firstData.friends;
  obj = friendAddTen(friends, set, obj);
  return answer;
}

module.exports = problem7;
