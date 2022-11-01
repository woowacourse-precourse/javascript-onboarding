function problem7(user, friends, visitors) {
  var answer = [];

  let names = [...new Set(friends.flat(1))];
  let friendsInfo = {};
  names.forEach(
    (name) =>
      (friendsInfo[name] = friends
        .filter((relation) => relation.includes(name))
        .map((relation) => relation.filter((value) => value !== name)[0]))
  );
  let friendsOfUser = friendsInfo[user] ? friendsInfo[user] : [];
  let namesOthers = names.filter(
    (name) => !friendsOfUser.includes(name) && name !== user
  );

  let namesOthersScore = {};
  namesOthers.forEach(
    (name) =>
      (namesOthersScore[name] =
        friendsInfo[name].filter((friend) => friendsOfUser.includes(friend))
          .length * 10)
  );

  visitors.forEach((visitor) => {
    if (friendsOfUser.includes(visitor)) return;
    if (namesOthers.includes(visitor)) {
      namesOthersScore[visitor]++;
    } else {
      namesOthersScore[visitor] = visitors.filter(
        (name) => name === visitor
      ).length;
    }
  });

  answer = Object.keys(namesOthersScore)
    .filter((key) => namesOthersScore[key] !== 0)
    .sort()
    .sort((a, b) => namesOthersScore[b] - namesOthersScore[a])
    .slice(0, 5);
  return answer;
}

module.exports = problem7;
