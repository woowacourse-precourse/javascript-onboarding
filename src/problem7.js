function comp(A, B) {
  if (A.score !== B.score) return B.score - A.score;
  if (A.name < B.name) return -1;
  return 1;
}

function problem7(user, friends, visitors) {
  var answer = [];
  const userInfo = new Map();

  for (let i = 0; i < friends.length; i++) {
    let first = friends[i][0];
    let second = friends[i][1];

    if (userInfo.has(first)) {
      userInfo.set(first, {
        friendship: [...userInfo.get(first).friendship, second],
        score: 0,
      });
    } else {
      userInfo.set(first, { friendship: [second], score: 0 });
    }

    if (userInfo.has(second)) {
      userInfo.set(second, {
        friendship: [...userInfo.get(second).friendship, first],
        score: 0,
      });
    } else {
      userInfo.set(second, { friendship: [first], score: 0 });
    }
  }

  let userFriendship = userInfo.get(user).friendship;

  for (let i = 0; i < userFriendship.length; i++) {
    const realatedUsers = userInfo.get(userFriendship[i]).friendship;

    userInfo.set(userFriendship[i], { friendship: realatedUsers, score: -100 });

    for (let j = 0; j < realatedUsers.length; j++) {
      if (realatedUsers[j] === user) continue;
      const realatedUserFriendship = userInfo.get(realatedUsers[j]).friendship;
      const realatedUserScore = userInfo.get(realatedUsers[j]).score;
      if (realatedUserScore < 0) continue;
      userInfo.set(realatedUsers[j], {
        friendship: realatedUserFriendship,
        score: realatedUserScore + 10,
      });
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    const visitor = visitors[i];

    if (userInfo.has(visitor)) {
      const visitorFriendship = userInfo.get(visitor).friendship;
      const visitorScore = userInfo.get(visitor).score;
      if (visitorScore < 0) continue;
      userInfo.set(visitor, {
        friendship: visitorFriendship,
        score: visitorScore + 1,
      });
    } else {
      userInfo.set(visitor, { friendship: [], score: 1 });
    }
  }

  let scoreArr = [];

  userInfo.forEach((value, key, map) => {
    if (value.score <= 0) return;
    scoreArr.push({ name: key, score: value.score });
  });

  scoreArr = scoreArr.sort(comp);

  const minLength = Math.min(scoreArr.length, 5);

  for (let i = 0; i < minLength; i++) {
    answer.push(scoreArr[i].name);
  }

  return answer;
}

module.exports = problem7;
