function getAcquaintance(friends, user) {
  let acquaintance = {};

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

  return acquaintance;
}

function getAcquaintanceScore(acquaintance, user) {
  let score = {};

  if (acquaintance[user]) acquaintance[user].forEach(friend => {
    acquaintance[friend].forEach(recommend => {
      if (!acquaintance[user].includes(recommend)){
        if (score[recommend]) score[recommend] += 10;
        else score[recommend] = 10;
      }
    })
  });

  return score;
}

function getVisitScore(acquaintance, visitors, user) {
  let score = {};

  if (visitors) visitors.forEach(visitor => {
    if (!acquaintance[user] || !acquaintance[user].includes(visitor)) {
      if (score[visitor]) score[visitor] += 1;
      else score[visitor] = 1;
    }
  })

  return score;
}

function getRecommandScore(acquaintance, visitors, user) {
  const acquaintance_score = getAcquaintanceScore(acquaintance, user),
        visit_score = getVisitScore(acquaintance, visitors, user);

  let recommend_friends = {};

  for (let friend in acquaintance_score) {
    recommend_friends[friend] = acquaintance_score[friend];
  }

  for (let friend in visit_score) {
    if (recommend_friends[friend]) recommend_friends[friend] += visit_score[friend];
    else recommend_friends[friend] = visit_score[friend];
  }

  return recommend_friends;
}

function sortFriends(friends) {
  let sorted_friends = [];
  // 점수 내림차순, 이름 오름차순
  sorted_friends = Object.keys(friends)
    .sort((a, b) => {
      if (friends[a] > friends[b]) return -1;
      if (friends[a] < friends[b]) return 1;
      if (a > b) return 1;
      if (a < b) return -1;
    });

  return sorted_friends;
}

function problem7(user, friends, visitors) {
  const acquaintance = getAcquaintance(friends, user),
        recommend_friends = getRecommandScore(acquaintance, visitors, user),
        sorted_friends = sortFriends(recommend_friends);
  
  return sorted_friends.slice(0, 5);
}

module.exports = problem7;
