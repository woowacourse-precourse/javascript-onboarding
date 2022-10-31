function problem7(user, friends, visitors) {
  const friendsMap = {};

  friends.forEach(([a, b]) => {
    if(friendsMap.hasOwnProperty(a)) friendsMap[a].push(b);
    else friendsMap[a] = [b];
    if(friendsMap.hasOwnProperty(b)) friendsMap[b].push(a);
    else friendsMap[b] = [a];
  })

  const score = {};

  for(const name in friendsMap) {
    if(name === user) continue;
    if(friendsMap[user].includes(name)) continue;

    const mutualFriends = friendsMap[name].filter(a => friendsMap[user].includes(a));
    score[name] = mutualFriends.length * 10;
  }

  visitors.forEach(name => {
    if(friendsMap[user].includes(name)) return;

    if(!score[name]) score[name] = 1;
    else score[name] += 1;
  })
}

module.exports = problem7;
