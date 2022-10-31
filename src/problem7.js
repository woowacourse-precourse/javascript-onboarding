function problem7(user, friends, visitors) {
  let answer = [];

  let friendsList = [];
  for (let i = 0; i < friends.length; i++) {
    let sliceFriends = friends[i].slice();
    sliceFriends.forEach((ele) => {
      friendsList.push(ele);
    });
  }
  const visitorFriends = friendsList.concat(visitors);
  let justFriends = new Set(visitorFriends);
  justFriends.delete(user);
  friends.map((name) => {
    if (name.includes(user)) {
      justFriends.delete(name.filter((name) => name !== user).join());
    }
  });
  justFriends = [...justFriends];

  let friendsPoint = new Array(justFriends.length);
  for (let i = 0; i < friendsPoint.length; i++) {
    friendsPoint[i] = [justFriends[i], 0];
  }

  let userFriend = "";
  let friendFriends = "";

  friends.map((first) => {
    if (first.includes(user)) {
      userFriend = first.filter((el) => el !== user).join();

      friends.map((second) => {
        if (second.includes(userFriend)) {
          friendFriends = second.filter((el) => el != userFriend).join();

          for (let i = 0; i < friendsPoint.length; i++) {
            if (friendsPoint[i][0] === friendFriends) {
              friendsPoint[i][1] += 10;
            }
          }
        }
      });
    }
  });

  for (let i = 0; i < visitors.length; i++) {
    for (let j = 0; j < friendsPoint.length; j++) {
      if (friendsPoint[j][0] === visitors[i]) {
        friendsPoint[j][1] += 1;
      }
    }
  }
  friendsPoint.sort((a, b) => b[1] - a[1]);

  return answer;
}
user = "mrko";
friends = [
  ["mrko", "jun"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["jun", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];

console.log(problem7(user, friends, visitors));
module.exports = problem7;
