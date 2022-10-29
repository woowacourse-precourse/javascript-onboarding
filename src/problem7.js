function problem7(user, friends, visitors) {
  let answer = [];
  let bestFriends = [];
  let recommend = {};

  //user와 현재 친구인 사람 찾기
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1] === user) {
      bestFriends.push(friends[i][0]);
    } else if (friends[i][0] === user) {
      bestFriends.push(friends[i][1]);
    }
  }

  //서로 아는 친구의 경우 확인
  for (let i = 0; i < friends.length; i++) {
    if (
      bestFriends.indexOf(friends[i][0]) === -1 &&
      friends[i][0] !== user &&
      bestFriends.indexOf(friends[i][1]) !== -1
    ) {
      if (friends[i][0] in recommend) {
        recommend[friends[i][0]] += 10;
      } else {
        recommend[friends[i][0]] = 10;
      }
    } else if (
      bestFriends.indexOf(friends[i][1]) === -1 &&
      friends[i][1] !== user &&
      bestFriends.indexOf(friends[i][0]) !== -1
    ) {
      if (friends[i][1] in recommend) {
        recommend[friends[i][1]] += 10;
      } else {
        recommend[friends[i][1]] = 10;
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (bestFriends.indexOf(visitors[i]) === -1) {
      if (visitors[i] in recommend) {
        recommend[visitors[i]] += 1;
      } else {
        recommend[visitors[i]] = 1;
      }
    }
  }

  for (let name in recommend) {
    answer.push([name, recommend[name]]);
  }

  answer.sort(function (a, b) {
    if (b[1] > a[1]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    if (b[0] > a[0]) {
      return -1;
    }
    return 0;
  });
  answer = answer.map((item) => item[0]);

  if (answer.length > 5) {
    answer = answer.slice(0, 5);
  }

  return answer;
}

module.exports = problem7;
