function problem7(user, friends, visitors) {
  var answer = [];

  // 추천 친구 가능한 이름 목록
  let names = [...new Set(friends.flat(1))];
  let friendsInfo = {};
  names.forEach(
    (name) =>
      (friendsInfo[name] = friends
        .filter((relation) => relation.includes(name))
        .map((relation) => relation.filter((value) => value !== name)[0]))
  );
  let friendsOfUser = friendsInfo[user];
  let namesOthers = names.filter(
    (name) => !friendsOfUser.includes(name) && name !== user
  );

  // 함께 아는 친구 1명 당 10점
  let namesOthersScore = {};
  namesOthers.forEach(
    (name) =>
      (namesOthersScore[name] =
        friendsInfo[name].filter((friend) => friendsOfUser.includes(friend))
          .length * 10)
  );

  // 친구를 제외한 방문자에 대해 방문 1번 당 1점
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
    .sort()
    .sort((a, b) => namesOthersScore[b] - namesOthersScore[a])
    .slice(0, 5);

  return answer;
}

module.exports = problem7;
