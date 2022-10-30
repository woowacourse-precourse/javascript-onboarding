function problem7(user, friends, visitors) {
  let answer = [];
  const relationships = {};
  const notFriends = {};

  friends.forEach((friend) => {
    //사용자간의 관계를 초기화한다.
    if (!Object.keys(relationships).includes(friend[0]))
      relationships[friend[0]] = [];
    if (!Object.keys(relationships).includes(friend[1]))
      relationships[friend[1]] = [];
    relationships[friend[0]].push(friend[1]);
    relationships[friend[1]].push(friend[0]);
  });

  Object.keys(relationships).forEach((person) => {
    //user와 친구가 아닌 사용자의 목록을 초기화한다.
    if (!relationships[user].includes(person) && person !== user)
      notFriends[person] = 0;
  });

  Object.keys(notFriends).forEach((notFriend) => {
    notFriends[notFriend] += // notFriends 목록에 있는 사람들과 친구인 사용자가 user와 친구라면 10점을 더한다.
      relationships[notFriend].filter((r) => relationships[user].includes(r))
        .length * 10;
  });

  visitors.forEach((visiter) => {
    if (relationships[user].includes(visiter)) return; // visiter와 이미 친구라면 친구추천에 띄울 필요가 없으므로 스킵한다.
  });

  return answer;
}

module.exports = problem7;
