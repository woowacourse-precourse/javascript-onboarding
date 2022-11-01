function problem7(user, friends, visitors) {
  var answer;
  const scoreObj = {};
  const userFriends = findFriendsByUser(user, friends);
  const togetherFriends = findUsersKnowTogether(user, userFriends, friends);
  const recommendedScoreObj = addScore(scoreObj, togetherFriends, visitors);
  answer = Object.keys(recommendedScoreObj).filter(
    (name) => !userFriends.includes(name)
  );
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

function addScoreByVisitors(scoreObj, visitors) {
  const newScoreObj = { ...scoreObj };
  visitors.forEach((visitor) => {
    if (newScoreObj[visitor]) {
      newScoreObj[visitor] += 1;
    } else {
      newScoreObj[visitor] = 1;
    }
  });
  return newScoreObj;
}

function addScore(scoreObj, togetherFriends, visitors) {
  const freindsScoreObj = addScoreByTogetherFriends(scoreObj, togetherFriends);
  return addScoreByVisitors(freindsScoreObj, visitors);
}

module.exports = problem7;
