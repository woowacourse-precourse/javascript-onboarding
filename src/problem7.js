function problem7(user, friends, visitors) {
  const friendsMap = {};

  friends.forEach(([a, b]) => {
    if(friendsMap.hasOwnProperty(a)) friendsMap[a].push(b);
    else friendsMap[a] = [b];
    if(friendsMap.hasOwnProperty(b)) friendsMap[b].push(a);
    else friendsMap[b] = [a];
  })
}

module.exports = problem7;
