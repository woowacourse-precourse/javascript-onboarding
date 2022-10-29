function problem7(user, friends, visitors) {
  let recommend_friends = {},
      acquaintance = {};

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

  return recommend_friends;
}

module.exports = problem7;
