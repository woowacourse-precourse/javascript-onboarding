function problem7(user, friends, visitors) {
  let usersData = {};
  friends.forEach((item) => {
    if (!usersData[item[0]]) {
      usersData[item[0]] = [];
    }
    usersData[item[0]].push(item[1]);

    if (!usersData[item[1]]) {
      usersData[item[1]] = [];
    }
    usersData[item[1]].push(item[0]);
  });

  let friendOfFriend = [];
  usersData[user].forEach((friend) => {
    usersData[friend].forEach((friendsFriend) => {
      if (friendsFriend != user) {
        friendOfFriend.push(friendsFriend);
      }
    });
  });

  let pointInfo = {};
  friendOfFriend.forEach((person) => {
    if (!pointInfo[person]) {
      pointInfo[person] = 0;
    }
    pointInfo[person] += 10;
  });
  visitors.forEach((person) => {
    if (!usersData[user].includes(person)) {
      if (!pointInfo[person]) {
        pointInfo[person] = 0;
      }
      pointInfo[person] += 1;
    }
  });

  let arr = Object.entries(pointInfo);
  arr.sort();
  arr.sort((a, b) => {
    return b[1] - a[1];
  });

  let answer = [];
  arr.forEach((item, index) => {
    if (index < 5) {
      answer.push(item[0]);
    }
  });

  return answer;
}

module.exports = problem7;
