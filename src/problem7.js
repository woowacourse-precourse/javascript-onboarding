function problem7(user, friends, visitors) {
  let userObj = {};
  let userScore = {};
  let answer = [];

  for (let item of friends) {
    for (let i = 0; i < 2; i++) {
      if (item[i] in userObj) userObj[item[i]].push(item[1 - i]);
      else userObj[item[i]] = [item[1 - i]];
    }
  }

  if (user in userObj) {
    for (let person in userObj) {
      if (person === user) continue;
      if (userObj[user].includes(person)) continue;
      let score =
        userObj[person].filter((friend) => userObj[user].includes(friend))
          .length * 10;
      userScore[person] = score;
    }
  }

  for (let person of visitors) {
    if (user in userObj && userObj[user].includes(person)) continue;
    if (person in userScore) userScore[person]++;
    else userScore[person] = 1;
  }

  let sortedScore = Object.entries(userScore)
    .sort()
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  for (let [name, _] of sortedScore) {
    answer.push(name);
  }
  return answer;
}

module.exports = problem7;
