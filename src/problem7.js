function problem7(user, friends, visitors) {
  let answer = [];
  const relationships = {};
  const notFriends = {};
  const notFriendsList = [];

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
    if (!Object.keys(notFriends).includes(visiter)) notFriends[visiter] = 0; // notFriends 목록에 없다면 새로 추가한다.
    notFriends[visiter] += 1;
  });

  Object.keys(notFriends).forEach((notFriend) => {
    if (notFriends[notFriend] === 0) return; //점수가 0인 유저는 추천되지 않도록 한다.
    // 친구가 아닌 유저의 정보를 각각의 객체로 만들어 배열에 저장한다.
    notFriendsList.push({
      name: notFriend,
      score: notFriends[notFriend],
    });
  });

  // 점수 기준 내림차순 정렬 및 이름 기준 오름차순 정렬한다.
  notFriendsList.sort((a, b) => {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  for (let notFriend of notFriendsList) {
    if (answer.length > 5) break; // 최대 5명이 추천되도록 한다.
    answer.push(notFriend.name);
  }

  return answer;
}

module.exports = problem7;
