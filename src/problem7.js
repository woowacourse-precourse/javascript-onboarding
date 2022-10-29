function problem7(user, friends, visitors) {
  let recommend_friends = {},
      acquaintance = {},
      sorted_friends = [];

  friends.forEach(([friend1, friend2]) => {
    if (friend2 !== user) {
      if (acquaintance[friend1]) acquaintance[friend1].push(friend2);
      else acquaintance[friend1] = [friend2];
    }
    if (friend1 !== user) {
      if (acquaintance[friend2]) acquaintance[friend2].push(friend1);
      else acquaintance[friend2] = [friend1];
    }
  });
  
  acquaintance[user].forEach(friend => {
    acquaintance[friend].forEach(recommand => {
      if (recommend_friends[recommand]) recommend_friends[recommand] += 10;
      else recommend_friends[recommand] = 10;
    })
  })

  visitors.forEach(visitor => {
    if (!acquaintance[user].includes(visitor)) {
      if (recommend_friends[visitor]) recommend_friends[visitor] += 1;
      else recommend_friends[visitor] = 1;
    }
  })

  sorted_friends = Object.keys(recommend_friends)
    .sort((a, b) => {
      if (recommend_friends[a] > recommend_friends[b]) return -1;
      if (recommend_friends[a] < recommend_friends[b]) return 1;
      if (a > b) return 1;
      if (a < b) return -1;
    });

  return sorted_friends.slice(0, 5);
}

module.exports = problem7;
