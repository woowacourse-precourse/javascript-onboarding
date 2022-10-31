function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function findFriendsByUser(user, friends) {
  return friends
    .map((friend) => {
      const [A, B] = friend;
      if (A === user) {
        return B;
      }
      if (B === user) {
        return A;
      }
    })
    .filter((element) => element);
}

function findUsersKnowTogether(user, userFriends, friends) {
  return friends
    .map((friend) => {
      const [A, B] = friend;
      if (userFriends.includes(A) && B !== user) {
        return B;
      }
      if (userFriends.includes(B) && A !== user) {
        return A;
      }
    })
    .filter((element) => element);
}

function addScoreByTogetherFriends(scoreObj, togetherFriends) {
  const newScoreObj = { ...scoreObj };
  togetherFriends.forEach((friend) => {
    if (newScoreObj[friend]) {
      newScoreObj[friend] += 10;
    } else {
      newScoreObj[friend] = 10;
    }
  });
  return newScoreObj;
}

module.exports = problem7;
