function problem7(user, friends, visitors) {
  const scoreObj = {};

  const userFriendList = friends
    .filter((item) => item.includes(user))
    .map((value) => {
      if (value[0] === user) {
        return value[1];
      } else return value[0];
    });

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < userFriendList.length; j++) {
      if (
        !friends[i].includes(user) &&
        friends[i].includes(userFriendList[j])
      ) {
        const index = friends[i].findIndex(
          (item) => item !== userFriendList[j]
        );

        if (friends[i][index] in scoreObj) {
          scoreObj[friends[i][index]] += 10;
        } else {
          scoreObj[friends[i][index]] = 10;
        }
      }
    }
  }

  for (item of visitors) {
    if (userFriendList.includes(item)) continue;
    else if (item in scoreObj) {
      scoreObj[item] += 1;
    } else {
      scoreObj[item] = 1;
    }
  }

  const result = Object.entries(scoreObj)
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      if (a[1] === b[1]) {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        else return 0;
      }
    })
    .flatMap((item) => item[0])
    .splice(0, 5);

  return result;
}

module.exports = problem7;
