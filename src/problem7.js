function problem7(user, friends, visitors) {
  let answer = [];
  let bestFriends = [];
  let recommend = {};

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1] === user) {
      bestFriends.push(friends[i][0]);
    }
  }

  //서로 아는 친구의 경우 확인
  for (let i = 0; i < friends.length; i++) {
    if (bestFriends.indexOf(friends[i][0]) !== -1 && friends[i][1] !== user) {
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

  answer.sort((a, b) => b[1] - a[1]);

  answer = answer.map((item) => item[0]);
  if (answer.length > 5) {
    answer = answer.slice(0, 6);
  }

  return answer;
}

module.exports = problem7;
