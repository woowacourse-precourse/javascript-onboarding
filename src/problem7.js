function problem7(user, friends, visitors) {
  const score = {};

  const usersFriends = friends
    .filter((element) => element.includes(user))
    .flatMap((element) =>
      element.splice(
        element.findIndex((innerEl) => innerEl !== user),
        1
      )
    );

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < usersFriends.length; j++) {
      if (!friends[i].includes(user) && friends[i].includes(usersFriends[j])) {
        const index = friends[i].findIndex(
          (element) => element !== usersFriends[j]
        );

        if (friends[i][index] in score) {
          score[friends[i][index]] += 10;
        } else {
          score[friends[i][index]] = 10;
        }
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (usersFriends.includes(visitors[i])) continue;
    if (visitors[i] in score) {
      score[visitors[i]] += 1;
    } else {
      score[visitors[i]] = 1;
    }
  }

  const result = Object.entries(score)
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      if (a[1] === b[1]) {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        else return 0;
      }
    })
    .flatMap((element) => element[0]);

  return result.splice(0, 5);
}

module.exports = problem7;
