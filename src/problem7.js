function problem7(user, friends, visitors) {
  let userFriends = [];
  let point = new Map();

  friends.forEach((friendList) => {
    if (friendList.includes(user)) {
      friendList[0] === user
        ? userFriends.push([friendList[1]])
        : userFriends.push(friendList[0]);
    }
  });

  let tenPointArr = [];

  friends.forEach((friendList) => {
    userFriends.forEach((userFriend) => {
      if (friendList[0] === userFriend && friendList[1] !== user)
        tenPointArr.push(friendList[1]);
      else if (friendList[1] === userFriend && friendList[0] !== user)
        tenPointArr.push(friendList[0]);
    });
  });

  sum(tenPointArr, 10);
  sum(visitors, 1);

  let pointArr = [];
  let answer = [];
  for (let x of point.values()) {
    if (!pointArr.includes(x)) pointArr.push(x);
  }

  pointArr.forEach((x) => {
    let a = [];
    for (let y of point) {
      if (y.includes(x)) a.push(y[0]);
    }
    answer.push(...a.sort());
  });

  function sum(arr, plus) {
    arr.forEach((friend) => {
      if (!userFriends.includes(friend)) {
        if (point.has(friend)) point.set(friend, point.get(friend) + plus);
        else point.set(friend, plus);
      }
    });
  }
  return answer.length > 5 ? answer.splice(0, 5) : answer;
}

module.exports = problem7;
